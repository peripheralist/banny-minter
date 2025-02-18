import { categoryOfId } from "@/constants/category";
import { RESOLVER_ADDRESS } from "@/constants/contracts";
import { NfTsQuery } from "@/generated/graphql";
import { EquippedTiers, Tier } from "@/model/tier";
import { decodeNFTInfo } from "@/utils/decodeNftInfo";
import { parseTier } from "@/utils/parseTier";
import { useMemo } from "react";
import { useNftsOf } from "./useNftsOf";

export function useBannyEquippedTiers(
  bannyNft: NfTsQuery["nfts"][number] | undefined
) {
  const allWornNfts = useNftsOf(RESOLVER_ADDRESS);

  const data = useMemo(() => {
    if (!allWornNfts.data || !bannyNft) return;

    const { nfts } = allWornNfts.data;

    const equipped: EquippedTiers = {};

    const bannyNftTier = {
      ...parseTier(bannyNft.tier),
      tokenId: parseInt(bannyNft.tokenId.toString()),
    } as Tier;

    equipped.body = bannyNftTier;

    const decoded = decodeNFTInfo(bannyNft.tokenUri);

    const allAssetIds = [...(decoded?.outfitIds ?? [])];
    if (decoded?.backgroundId) allAssetIds.push(decoded.backgroundId);

    allAssetIds.forEach((tokenId) => {
      const assetTier = nfts.find(
        (nft) => nft.tokenId === BigInt(tokenId)
      )?.tier;

      if (assetTier) {
        equipped[categoryOfId[assetTier.category]] = {
          ...parseTier(assetTier),
          tokenId: parseInt(tokenId.toString()),
        } as Tier;
      } else {
        console.warn("Error finding tier for NFT with tokenId:", tokenId);
      }
    });

    return equipped;
  }, [bannyNft, allWornNfts]);

  return { data, loading: allWornNfts.loading };
}
