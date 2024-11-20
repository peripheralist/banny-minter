import DressingRoom from "@/components/DressingRoom";
import FullscreenLoading from "@/components/shared/FullscreenLoading";
import { Category } from "@/constants/category";
import EquipmentContextProvider from "@/contexts/EquipmentContextProvider";
import { NfTsQuery } from "@/generated/graphql";
import { useBannyEquippedTiers } from "@/hooks/queries/useBannyEquippedTiers";
import { useOwnedTiers } from "@/hooks/queries/useOwnedTiers";
import { useMemo } from "react";
import { useAccount } from "wagmi";

export default function DressOwnedBanny({
  bannyNft,
}: {
  bannyNft: NfTsQuery["nfts"][number] | undefined;
}) {
  const { address } = useAccount();

  const { tiers: ownedTiers, loading: tiersLoading } =
    useOwnedTiers(address);

  const { data: equippedTiers } = useBannyEquippedTiers(bannyNft);

  const formattedAvailableTiers = useMemo(() => {
    if (!ownedTiers || !equippedTiers) return;

    // Format owned nft tiers (equipped nfts are unowned)
    const formattedOwnedTiers = ownedTiers
      .filter(
        ({ tier }) => equippedTiers[tier.category]?.tierId !== tier.tierId // only add tier if not equipped
      )
      .map(({ tier, nfts }) => {
        const tokenId =
          tier.category === "naked" && bannyNft
            ? bannyNft.tokenId
            : nfts[0].tokenId; // override tier tokenId with tokenId of first NFT, or bannyNft

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
  }, [ownedTiers, bannyNft, equippedTiers]);

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
      <DressingRoom />
    </EquipmentContextProvider>
  ) : (
    <FullscreenLoading />
  );
}
