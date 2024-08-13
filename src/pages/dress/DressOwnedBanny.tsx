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

  const formattedOwnedTiers = useMemo(() => {
    if (!ownedTiers) return;

    function labelForTier(quantity: number) {
      return (
        <div
          style={{
            fontSize: "0.875rem",
            fontWeight: "bold",
          }}
        >
          {quantity} owned
        </div>
      );
    }

    function detailForTier({
      category,
      name,
      tokenId,
    }: {
      category: Category;
      name: string | undefined;
      tokenId: bigint;
    }) {
      return (
        <div style={{ display: "flex" }}>
          <div
            style={{
              fontWeight: "bold",
              width: "10%",
              minWidth: 100,
              color: COLORS.banana,
            }}
          >
            {category}:
          </div>
          <div
            style={{
              width: "100%",
              display: "inline-flex",
              justifyContent: "space-between",
            }}
          >
            <span>{name ? name : "--"}</span>
            <span style={{ opacity: 0.5 }}>
              {tokenId ? `ID: ${tokenId.toString()}` : null}
            </span>
          </div>
        </div>
      );
    }

    return Object.entries(ownedTiers).reduce(
      (acc, [category, tiersOfCategory]) => ({
        ...acc,
        [category]: tiersOfCategory.map((t) => {
          const tokenId = t.nfts[0].tokenId; // override tier tokenId with tokenId of first NFT

          return {
            ...t.tier,
            tokenId,
            label: labelForTier(t.nfts.length),
            detail: detailForTier({
              category: t.tier.category,
              name: t.tier.name,
              tokenId,
            }),
          };
        }),
      }),
      {} as Tiers
    );
  }, [ownedTiers]);

  const { data: equippedTiers } = useBannyEquippedTiers(bannyNft);

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

      {formattedOwnedTiers ? (
        <EquipmentContextProvider
          availableTiers={formattedOwnedTiers}
          defaultEquippedTierIds={equippedTierIds}
        >
          <DressingRoom button={<DecorateButton />} />
        </EquipmentContextProvider>
      ) : (
        <FullscreenLoading />
      )}
    </div>
  );
}
