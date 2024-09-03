import DressingRoom from "@/components/DressingRoom";
import DecorateButton from "@/components/DressingRoom/DecorateButton";
import FullscreenLoading from "@/components/shared/FullscreenLoading";
import { COLORS } from "@/constants/colors";
import { Category } from "@/constants/nfts";
import EquipmentContextProvider from "@/contexts/EquipmentContextProvider";
import { NfTsQuery } from "@/generated/graphql";
import { useOwnedCategorizedTiers } from "@/hooks/queries/useOwnedCategorizedTiers";
import { useBannyEquippedTiers } from "@/hooks/useBannyEquippedTiers";
import { Tiers } from "@/model/tier";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { useAccount } from "wagmi";

const Toolbar = dynamic(() => import("@/components/Toolbar"), { ssr: false });

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

    function labelForTier(quantity?: number) {
      return (
        <div>{quantity === undefined ? "Equipped" : `${quantity} owned`}</div>
      );
    }

    function detailForTier({
      name,
      tokenId,
    }: {
      name: string | undefined;
      tokenId: bigint;
    }) {
      return (
        <div style={{ display: "flex", width: "100%" }}>
          <div style={{ flex: 1 }}>{name ? name : "--"}</div>

          <span style={{ opacity: 0.5 }}>
            {tokenId ? `ID: ${tokenId.toString()}` : null}
          </span>
        </div>
      );
    }

    // Format and add owned nft tiers (equipped items are unowned)
    const formattedOwnedTiers = Object.entries(ownedTiers).reduce(
      (acc, [category, tiersOfCategory]) => ({
        ...acc,
        [category]: tiersOfCategory.map((t) => {
          const tokenId =
            category === "naked" && bannyNft
              ? bannyNft.tokenId
              : t.nfts[0].tokenId; // override tier tokenId with tokenId of first NFT, or bannyNft

          return {
            ...t.tier,
            tokenId,
            label: labelForTier(t.nfts.length),
            detail: detailForTier({
              name: t.tier.name,
              tokenId,
            }),
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
            label: labelForTier(),
            detail: detailForTier({
              name: tier.name,
              tokenId: BigInt(tier.tokenId ?? 0),
            }),
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

  return (
    <div>
      <Toolbar />

      <style>{`body { background: ${COLORS.banana} }`}</style>

      {formattedAvailableTiers ? (
        <EquipmentContextProvider
          availableTiers={formattedAvailableTiers}
          defaultEquippedTierIds={equippedTierIds}
          defaultGroup="head"
        >
          <DressingRoom button={<DecorateButton />} />
        </EquipmentContextProvider>
      ) : (
        <FullscreenLoading />
      )}
    </div>
  );
}
