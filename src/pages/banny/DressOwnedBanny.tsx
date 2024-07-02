import DressingRoom from "@/components/DressingRoom";
import DecorateButton from "@/components/DressingRoom/DecorateButton";
import FullscreenLoading from "@/components/shared/FullscreenLoading";
import { COLORS } from "@/constants/colors";
import { Category } from "@/constants/nfts";
import EquipmentContextProvider from "@/contexts/EquipmentContextProvider";
import { NfTsQuery } from "@/generated/graphql";
import { useOwnedCategorizedTiers } from "@/hooks/queries/useOwnedCategorizedTiers";
import { useBannyEquippedTiers } from "@/hooks/useBannyEquippedTiers";
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

  const equippedTiers = useBannyEquippedTiers(bannyNft);

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

      {ownedTiers ? (
        <EquipmentContextProvider
          availableTiers={ownedTiers}
          defaultEquippedTierIds={equippedTierIds}
        >
          <style>{`body { background: ${COLORS.banana} }`}</style>
          <DressingRoom button={<DecorateButton />} />
        </EquipmentContextProvider>
      ) : (
        <FullscreenLoading />
      )}
    </div>
  );
}
