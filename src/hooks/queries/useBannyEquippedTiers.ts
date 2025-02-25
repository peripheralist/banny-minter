import { NfTsQuery } from "@/generated/graphql";
import { EquippedTiers, Tier } from "@/model/tier";
import { decodeNFTInfo } from "@/utils/decodeNftInfo";
import { parseTier } from "@/utils/parseTier";
import { useMemo } from "react";
import { useAllTiers } from "./useAllTiers";
import { tierIdOfTokenId } from "@/utils/tierIdOfTokenId";

export function useBannyEquippedTiers(
  bannyNft: NfTsQuery["nfts"][number] | undefined
) {
  const { tiers, loading } = useAllTiers();

  const data = useMemo(() => {
    if (!tiers || !bannyNft) return;

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
      const tierId = tierIdOfTokenId(tokenId);
      const assetTier = tiers.find((t) => t.tierId === tierId);

      if (assetTier) {
        equipped[assetTier.category] = {
          ...assetTier,
          tokenId: parseInt(tokenId.toString()),
        } as Tier;
      } else {
        console.warn("Error finding tier for NFT with tokenId:", tokenId);
      }
    });

    return equipped;
  }, [bannyNft, tiers]);

  return { data, loading };
}
