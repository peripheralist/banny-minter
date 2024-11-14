import EquippedTiersPreview from "@/components/EquippedTiersPreview";
import Fuzz from "@/components/pixelRenderers/Fuzz";
import { NfTsQuery } from "@/generated/graphql";
import { useBannyEquippedTiers } from "@/hooks/useBannyEquippedTiers";

export default function DressedBannyNftImage({
  nft,
  size,
}: {
  nft: NfTsQuery["nfts"][number] | undefined;
  size: number;
}) {
  const { data: equippedTiers, loading } = useBannyEquippedTiers(nft);

  console.log("asdf dressedbanny", { equippedTiers });

  if (!equippedTiers || loading) {
    return <Fuzz fill="#ccc" width={size} height={size} />;
  }

  return <EquippedTiersPreview equipped={equippedTiers} size={size} />;
}
