import { categoryOfId } from "@/constants/category";
import { NfTsQuery } from "@/generated/graphql";
import { EquippedTiers, Tier } from "@/model/tier";
import { decodeNFTInfo } from "@/utils/decodeNftInfo";
import { parseTier } from "@/utils/parseTier";
import { useMemo } from "react";
import { useNftsOf } from "./queries/useNftsOf";
import { useResolverAddress } from "./useResolverAddress";

export function useBannyEquippedTiers(
  bannyNft: NfTsQuery["nfts"][number] | undefined
) {
  const resolverAddress = useResolverAddress();
  const allWornNfts = useNftsOf(resolverAddress);

  const data = useMemo(() => {
    if (!allWornNfts.data || !bannyNft) return;

    const { nfts } = allWornNfts.data;

    const equipped: EquippedTiers = {};

    const bannyNftTier = {
      ...parseTier(bannyNft.tier),
      tokenId: parseInt(bannyNft.tokenId.toString()),
    } as Tier;

    equipped["naked"] = bannyNftTier;

    const decoded = decodeNFTInfo(bannyNft.tokenUri);

    decoded?.outfitIds?.forEach((tokenId) => {
      const tier = nfts.find((nft) => nft.tokenId === tokenId)?.tier;

      if (tier) {
        const nftsOfTier = allWornNfts.data?.nfts.filter(
          (nft) => nft.tier.tierId === tier.tierId
        );

        if (!nftsOfTier) {
          console.error("Error getting equipped tiers from decoded outfitIds");
          return;
        }

        equipped[categoryOfId[tier.category]] = {
          ...parseTier(tier),
          tokenId: parseInt(nftsOfTier[0].tokenId.toString()),
        } as Tier;
      } else {
        console.warn("Error finding tier for NFT with tokenId:", tokenId);
      }
    });

    return equipped;
  }, [bannyNft, allWornNfts]);

  return { data, loading: allWornNfts.loading };
}
