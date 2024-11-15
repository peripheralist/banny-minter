import { categoryOfId } from "@/constants/category";
import { NfTsQuery } from "@/generated/graphql";
import { EquippedTiers, Tier } from "@/model/tier";
import { decodeNFTInfo } from "@/utils/decodeNftInfo";
import { parseTier } from "@/utils/parseTier";
import { useMemo } from "react";
import { useResolverAddress } from "../useResolverAddress";
import { useNftsOf } from "./useNftsOf";

export function useBannyEquippedTiers(
  bannyNft: NfTsQuery["nfts"][number] | undefined
) {
  const resolverAddress = useResolverAddress();
  const allWornNfts = useNftsOf(resolverAddress);

  console.log("asdf", { allWornNfts });

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

    console.log("asdf", decoded);

    const allAssetIds = [...(decoded?.outfitIds ?? [])];
    if (decoded?.worldId) allAssetIds.push(decoded.worldId);

    allAssetIds.forEach((tokenId) => {
      const assetTier = nfts.find(
        (nft) => nft.tokenId === BigInt(tokenId)
      )?.tier;

      console.log("asdf", tokenId, assetTier);

      if (assetTier) {
        equipped[categoryOfId[assetTier.category]] = {
          ...parseTier(assetTier),
          tokenId: parseInt(tokenId.toString()),
        } as Tier;
      } else {
        console.warn("Error finding tier for NFT with tokenId:", tokenId);
      }
    });

    console.log("asdf", equipped);

    return equipped;
  }, [bannyNft, allWornNfts]);

  return { data, loading: allWornNfts.loading };
}
