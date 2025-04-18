import { CategoryLib } from "@/model/categoryLib";
import { NFTMetadata } from "@/model/nftInfo";
import { TierOrNft } from "@/model/tierOrNft";
import { tierIdOfTokenId } from "@/utils/tierIdOfTokenId";
import { useMemo } from "react";
import { useAllTiers } from "./useAllTiers";

export function useBannyEquippedTiers(bannyNft: TierOrNft<true> | undefined) {
  const { parsedTiers, loading } = useAllTiers();

  const data = useMemo(() => {
    if (!parsedTiers || !bannyNft) return;

    const equipped: CategoryLib<TierOrNft> = {
      body: bannyNft,
    };

    const { outfitIds, backgroundId } = bannyNft.metadata as NFTMetadata;

    const allAssetIds = [...(outfitIds ?? [])];
    if (backgroundId) allAssetIds.push(backgroundId);

    allAssetIds.forEach((tokenId) => {
      const tierId = tierIdOfTokenId(tokenId);
      const assetTier = parsedTiers.find((t) => t.tierId === tierId);

      if (assetTier) {
        equipped[assetTier.category] = assetTier;
      } else {
        console.warn("Error finding tier for NFT with tokenId:", tokenId);
      }
    });

    return equipped;
  }, [bannyNft, parsedTiers]);

  return { data, loading };
}
