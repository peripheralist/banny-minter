import EquippedTiersPreview from "@/components/EquippedTiersPreview";
import { NfTsQuery } from "@/generated/graphql";
import { useBannyEquippedTiers } from "@/hooks/useBannyEquippedTiers";

export default function PreviewUnownedBanny({
  bannyNft,
  size,
}: {
  bannyNft: NfTsQuery["nfts"][number] | undefined;
  size: number;
}) {
  const equippedTiers = useBannyEquippedTiers(bannyNft);

  return equippedTiers ? (
    <EquippedTiersPreview size={size} equipped={equippedTiers} />
  ) : null;
}
