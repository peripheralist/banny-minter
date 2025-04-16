import DressingRoom from "@/components/DressingRoom";
import FullscreenLoading from "@/components/shared/FullscreenLoading";
import { Category } from "@/constants/category";
import { BAN_HOOK } from "@/constants/contracts";
import { AlertContext } from "@/contexts/alertContext";
import EquipmentContextProvider from "@/contexts/EquipmentContextProvider";
import { useNfTsQuery } from "@/generated/graphql";
import { useBannyEquippedTiers } from "@/hooks/queries/useBannyEquippedTiers";
import { useOwnedTiers } from "@/hooks/queries/useOwnedTiers";
import { useAppChain } from "@/hooks/useAppChain";
import { NFT } from "@/model/nft";
import { Tier } from "@/model/tier";
import { useRouter } from "next/router";
import { useContext, useEffect, useMemo } from "react";
import { isAddressEqual } from "viem";
import { useAccount } from "wagmi";

export default function Index() {
  const { address } = useAccount();

  const { setAlert } = useContext(AlertContext);

  const router = useRouter();

  const appChain = useAppChain();

  const tokenId = useMemo(() => {
    try {
      return BigInt(parseInt(router.query.tokenId as string));
    } catch (e) {
      console.error("Error parsing tokenId");
      return BigInt(0);
    }
  }, [router.query.tokenId]);

  const { data: nfts, loading: nftsLoading } = useNfTsQuery({
    variables: {
      where: {
        tokenId,
        hook: BAN_HOOK,
        chainId: appChain.id,
      },
    },
  });

  const nft = useMemo(() => nfts?.nfts.items[0], [nfts?.nfts]);

  const isOwner = useMemo(
    () =>
      nft && address
        ? isAddressEqual(address, nft.owner?.address as `0x${string}`)
        : undefined,
    [address, nft]
  );

  useEffect(() => {
    if (isOwner === false) {
      if (address) {
        router.push(`/locker/${address}`);
      } else {
        router.push("/explore");
      }

      setAlert?.({
        title: "You don't own this Banny!",
        body: "To dress this Banny, connect the owner's wallet.",
      });
    }
  }, [router, nft, isOwner, setAlert, address]);

  if (nftsLoading) return <FullscreenLoading />;

  return <DressOwnedBanny bannyNft={nft} />;
}

function DressOwnedBanny({ bannyNft }: { bannyNft: NFT | undefined }) {
  const { address } = useAccount();

  const { tiers: ownedTiers, loading: tiersLoading } = useOwnedTiers(address);

  const { data: equippedTiers } = useBannyEquippedTiers(bannyNft);

  const formattedAvailableTiers = useMemo(() => {
    if (!ownedTiers || !equippedTiers) return;

    // Format owned nft tiers (equipped nfts are unowned)
    const formattedOwnedTiers: Tier[] = ownedTiers
      .filter(
        ({ tier }) =>
          tier.category !== "body" && // skip body tiers, we only want wearables
          equippedTiers[tier.category]?.tierId !== tier.tierId // only add tier if not equipped
      )
      .map(({ tier, nfts }) => ({
        ...tier,
        nft: {
          tokenId: Number(nfts[0].tokenId), // override tier tokenId with tokenId of first NFT
          ownedSupply: nfts.length,
        },
      }));

    // Add equipped nft tiers
    const allFormattedTiers = Object.values(equippedTiers).reduce(
      (acc, tier) => {
        if (acc.some((t) => t.tierId === tier.tierId)) {
          return acc.map((t) =>
            t.tierId === tier.tierId
              ? {
                  ...t,
                  nft: {
                    ...t.nft,
                    equipped: true,
                  },
                }
              : t
          );
        }

        return [
          ...acc,
          {
            ...tier,
            nft: {
              ...tier.nft,
              equipped: true,
            },
          },
        ];
      },
      formattedOwnedTiers
    );

    return allFormattedTiers;
  }, [ownedTiers, equippedTiers]);

  const equippedTierIds = useMemo(() => {
    if (!equippedTiers) return {};

    return Object.entries(equippedTiers).reduce(
      (acc, [category, tier]) => ({ ...acc, [category]: tier.tierId }),
      {} as Partial<Record<Category, number>>
    );
  }, [equippedTiers]);

  if (tiersLoading) return <FullscreenLoading />;

  return formattedAvailableTiers ? (
    <EquipmentContextProvider
      cacheKey="dress"
      availableTiers={formattedAvailableTiers}
      defaultEquippedTierIds={equippedTierIds}
      defaultGroup="head"
    >
      {bannyNft && <DressingRoom tokenId={bannyNft.tokenId} />}
    </EquipmentContextProvider>
  ) : (
    <FullscreenLoading />
  );
}
