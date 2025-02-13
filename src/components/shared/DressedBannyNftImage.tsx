import EquippedTiersPreview from "@/components/shared/EquippedTiersPreview";
import Fuzz from "@/components/pixelRenderers/Fuzz";
import { NfTsQuery } from "@/generated/graphql";
import { useBannyEquippedTiers } from "@/hooks/queries/useBannyEquippedTiers";

export default function DressedBannyNftImage({
  nft,
  size,
}: {
  nft: NfTsQuery["nfts"][number] | undefined;
  size: number;
}) {
  const { data: equippedTiers, loading } = useBannyEquippedTiers(nft);

  if (!equippedTiers || loading) {
    return <Fuzz fill="#ccc" width={size} height={size} />;
  }

  return <EquippedTiersPreview equipped={equippedTiers} size={size} />;
}
