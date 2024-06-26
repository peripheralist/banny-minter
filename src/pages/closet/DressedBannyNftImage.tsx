import EquippedTiersPreview from "@/components/EquippedTiersPreview";
import Fuzz from "@/components/pixelRenderers/Fuzz";
import { CATEGORIES } from "@/constants/nfts";
import { NfTsQuery } from "@/generated/graphql";
import { useCategorizedTiers } from "@/hooks/queries/useCategorizedTiers";
import { EquippedTiers } from "@/model/tier";
import { decodeNFTInfo } from "@/utils/decodeNftInfo";
import { useMemo } from "react";

export default function DressedBannyNftImage({
  nft,
  size,
}: {
  nft: NfTsQuery["nfts"][number];
  size: number;
}) {
  const allTiers = useCategorizedTiers();

  const equippedTiers = useMemo(() => {
    if (!allTiers.tiers) return;

    const { tiers } = allTiers;

    const equipped: Partial<EquippedTiers> = {};

    const decoded = decodeNFTInfo(nft.tokenUri);

    if (!decoded) return;

    for (const c of CATEGORIES) {
      equipped[c] =
        c === "naked"
          ? tiers[c].find((t) => t.tierId === nft.tier.tierId)
          : tiers[c].find((t) => t.tierId === decoded[`${c}Upc`]);
    }

    return equipped as EquippedTiers;
  }, [nft.tokenUri, nft.tier.tierId, allTiers]);

  if (!equippedTiers || allTiers.loading) {
    return <Fuzz fill="#ccc" width={size} height={size} pixelSize={4} />;
  }

  return <EquippedTiersPreview equipped={equippedTiers} size={size} />;
}
