import { CATEGORIES } from "@/constants/nfts";
import { NfTsQuery } from "@/generated/graphql";
import { EquippedTiers } from "@/model/tier";
import { decodeNFTInfo } from "@/utils/decodeNftInfo";
import { useMemo } from "react";
import { useCategorizedTiers } from "./queries/useCategorizedTiers";

export function useBannyEquippedTiers(
  bannyNft: NfTsQuery["nfts"][number] | undefined
) {
  const allTiers = useCategorizedTiers();

  const equippedTiers = useMemo(() => {
    if (!allTiers.tiers || !bannyNft) return;

    const { tiers } = allTiers;

    const equipped: Partial<EquippedTiers> = {};

    const decoded = decodeNFTInfo(bannyNft.tokenUri);

    if (!decoded) return;

    for (const c of CATEGORIES) {
      equipped[c] =
        c === "naked"
          ? tiers[c].find((t) => t.tierId === bannyNft.tier.tierId)
          : tiers[c].find((t) => t.tierId.toString() === decoded[`${c}Upc`]);
    }

    return equipped as EquippedTiers;
  }, [bannyNft, allTiers]);

  return equippedTiers;
}
