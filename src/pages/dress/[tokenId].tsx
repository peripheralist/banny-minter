import DressingRoom from "@/components/DressingRoom";
import FullscreenLoading from "@/components/shared/FullscreenLoading";
import ToolbarBagView from "@/components/shared/ToolbarBagView";
import { Category } from "@/constants/category";
import { LOOKS_COLLECTION_ID } from "@/constants/nfts";
import EquipmentContextProvider from "@/contexts/EquipmentContextProvider";
import { useNfTsQuery } from "@/generated/graphql";
import { useBannyEquippedTiers } from "@/hooks/queries/useBannyEquippedTiers";
import { useOwnedTiers } from "@/hooks/queries/useOwnedTiers";
import { NFT } from "@/model/nft";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { useAccount } from "wagmi";

export default function Index() {
  const { address } = useAccount();

  const router = useRouter();

  const tokenId = useMemo(() => {
    const _tokenId = router.query.tokenId as string | undefined;

    return BigInt(
      !_tokenId || isNaN(parseInt(_tokenId)) ? 0 : parseInt(_tokenId)
    );
  }, [router.query.tokenId]);

  const { data: nfts, loading: nftsLoading } = useNfTsQuery({
    variables: {
      where: {
        tokenId,
        collection: LOOKS_COLLECTION_ID,
      },
    },
  });

  const nft = useMemo(() => nfts?.nfts[0], [nfts?.nfts]);

  const isOwner = useMemo(
    () =>
      nft
        ? address?.toLowerCase() === nft?.owner.address.toLowerCase()
        : undefined,
    [address, nft]
  );

  useEffect(() => {
    if (isOwner === false) {
      router.push(`/nft/${nft?.tokenId.toString()}`);
    }
  }, [router, nft, isOwner]);

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
    const formattedOwnedTiers = ownedTiers
      .filter(
        ({ tier }) =>
          tier.category !== "naked" &&
          equippedTiers[tier.category]?.tierId !== tier.tierId // only add tier if not equipped
      )
      .map(({ tier, nfts }) => {
        const tokenId = nfts[0].tokenId; // override tier tokenId with tokenId of first NFT

        tier.tokenId = parseInt(tokenId.toString());
        tier.ownedSupply = nfts.length;

        return tier;
      });

    // Add equipped nft tiers
    const allFormattedTiers = Object.values(equippedTiers).reduce(
      (acc, tier) => {
        if (acc.some((t) => t.tierId === tier.tierId)) {
          return acc.map((t) =>
            t.tierId === tier.tierId
              ? {
                  ...t,
                  equipped: true,
                }
              : t
          );
        }

        return [
          ...acc,
          {
            ...tier,
            equipped: true,
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
      <ToolbarBagView
        dynamicToolbar
        header={`Dress Banny #${bannyNft?.tokenId.toString()}`}
      >
        <DressingRoom />
      </ToolbarBagView>
    </EquipmentContextProvider>
  ) : (
    <FullscreenLoading />
  );
}
