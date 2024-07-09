import { CATEGORIES } from "@/constants/nfts";
import { NfTsQuery } from "@/generated/graphql";
import { EquippedTiers } from "@/model/tier";
import { decodeNFTInfo } from "@/utils/decodeNftInfo";
import { useMemo } from "react";
import { useCategorizedTiers } from "./queries/useCategorizedTiers";

export function useBannyEquippedTiers(
  nft: NfTsQuery["nfts"][number] | undefined
) {
  const allTiers = useCategorizedTiers();

  const equippedTiers = useMemo(() => {
    if (!allTiers.tiers || !nft) return;

    const { tiers } = allTiers;

    const equipped: Partial<EquippedTiers> = {};

    const decoded = decodeNFTInfo(nft.tokenUri);

    if (!decoded) return;

    for (const c of CATEGORIES) {
      equipped[c] =
        c === "naked"
          ? tiers[c].find((t) => t.tierId === nft.tier.tierId)
          : tiers[c].find((t) => t.tierId.toString() === decoded[`${c}Upc`]);
    }

    return equipped as EquippedTiers;
  }, [nft, allTiers]);

  return equippedTiers;
}
