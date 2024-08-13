import { categoryOfId } from "@/constants/nfts";
import { NfTsQuery } from "@/generated/graphql";
import { EquippedTiers } from "@/model/tier";
import { decodeNFTInfo } from "@/utils/decodeNftInfo";
import { parseTier } from "@/utils/parseTier";
import { useMemo } from "react";
import { useCategorizedTiers } from "./queries/useCategorizedTiers";
import { useNftsOf } from "./queries/useNftsOf";
import { useResolverAddress } from "./useResolverAddress";

export function useBannyEquippedTiers(
  bannyNft: NfTsQuery["nfts"][number] | undefined
) {
  const resolverAddress = useResolverAddress();
  const allTiers = useCategorizedTiers();
  const allWornNfts = useNftsOf(resolverAddress);

  const data = useMemo(() => {
    if (!allWornNfts.data || !allTiers.tiers || !bannyNft) return;

    const { nfts } = allWornNfts.data;
    const { tiers } = allTiers;

    const equipped: Partial<EquippedTiers> = {};

    equipped["naked"] = tiers["naked"].find(
      (t) => t.tierId === bannyNft.tier.tierId
    );

    const decoded = decodeNFTInfo(bannyNft.tokenUri);

    decoded?.outfitIds?.forEach((tokenId) => {
      const tier = nfts.find((nft) => nft.tokenId === tokenId)?.tier;

      if (tier) {
        equipped[categoryOfId[tier.category]] = parseTier(tier);
      } else {
        console.warn("Error finding tier for NFT with tokenId:", tokenId);
      }
    });

    return equipped as EquippedTiers;
  }, [bannyNft, allTiers, allWornNfts]);

  return { data, loading: allTiers.loading || allWornNfts.loading };
}
