import EquippedTiersPreview from "@/components/EquippedTiersPreview";
import Fuzz from "@/components/pixelRenderers/Fuzz";
import { NfTsQuery } from "@/generated/graphql";
import { useCategorizedTiers } from "@/hooks/queries/useCategorizedTiers";
import { useBannyEquippedTiers } from "@/hooks/useBannyEquippedTiers";

export default function DressedBannyNftImage({
  nft,
  size,
}: {
  nft: NfTsQuery["nfts"][number] | undefined;
  size: number;
}) {
  const allTiers = useCategorizedTiers();

  const equippedTiers = useBannyEquippedTiers(nft);

  if (!equippedTiers || allTiers.loading) {
    return <Fuzz fill="#ccc" width={size} height={size} />;
  }

  return <EquippedTiersPreview equipped={equippedTiers} size={size} />;
}
