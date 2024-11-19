import DressingRoom from "@/components/DressingRoom";
import DecorateButton from "@/components/DressingRoom/DecorateButton";
import FullscreenLoading from "@/components/shared/FullscreenLoading";
import { Category } from "@/constants/category";
import EquipmentContextProvider from "@/contexts/EquipmentContextProvider";
import { NfTsQuery } from "@/generated/graphql";
import { useOwnedCategorizedTiers } from "@/hooks/queries/useOwnedCategorizedTiers";
import { useBannyEquippedTiers } from "@/hooks/queries/useBannyEquippedTiers";
import { Tiers } from "@/model/tier";
import { useMemo } from "react";
import { useAccount } from "wagmi";

export default function DressOwnedBanny({
  bannyNft,
}: {
  bannyNft: NfTsQuery["nfts"][number] | undefined;
}) {
  const { address } = useAccount();

  const { tiers: ownedTiers, loading: tiersLoading } =
    useOwnedCategorizedTiers(address);

  const { data: equippedTiers } = useBannyEquippedTiers(bannyNft);

  const formattedAvailableTiers = useMemo(() => {
    if (!ownedTiers || !equippedTiers) return;

    // Format and add owned nft tiers (equipped items are unowned)
    const formattedOwnedTiers = Object.entries(ownedTiers).reduce(
      (acc, [category, tiersOfCategory]) => ({
        ...acc,
        [category]: tiersOfCategory
          .filter(
            ({ tier }) =>
              equippedTiers[category as Category]?.tierId !== tier.tierId // only add tier if not equipped
          )
          .map((t) => {
            const tokenId =
              category === "naked" && bannyNft
                ? bannyNft.tokenId
                : t.nfts[0].tokenId; // override tier tokenId with tokenId of first NFT, or bannyNft

            return {
              ...t.tier,
              tokenId,
              ownedSupply: t.nfts.length,
            };
          }),
      }),
      {} as Tiers
    );

    // Format and add equipped nft tiers
    const formattedEquippedTiers = Object.entries(equippedTiers).reduce(
      (acc, [category, tier]) => ({
        ...acc,
        [category]: [
          ...acc[category as Category],
          {
            ...tier,
            equipped: true,
          },
        ],
      }),
      formattedOwnedTiers
    );

    return { ...formattedOwnedTiers, ...formattedEquippedTiers };
  }, [ownedTiers, bannyNft, equippedTiers]);

  const equippedTierIds = useMemo(() => {
    if (!equippedTiers) return {};

    return Object.entries(equippedTiers).reduce(
      (acc, [category, tier]) => ({ ...acc, [category]: tier?.tierId }),
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
      displayStrategy="dress"
    >
      <DressingRoom button={<DecorateButton />} />
    </EquipmentContextProvider>
  ) : (
    <FullscreenLoading />
  );
}
