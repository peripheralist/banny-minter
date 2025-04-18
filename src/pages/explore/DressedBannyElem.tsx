import EquippedTiersPreview from "@/components/shared/EquippedTiersPreview";
import { useAllTiers } from "@/hooks/queries/useAllTiers";
import { CategoryLib } from "@/model/categoryLib";
import { NFTMetadata } from "@/model/nftInfo";
import { TierOrNft } from "@/model/tierOrNft";
import { tierIdOfTokenId } from "@/utils/tierIdOfTokenId";
import { useCallback, useMemo } from "react";

export default function DressedBannyElem({
  nftInfo,
  size,
}: {
  nftInfo: NFTMetadata;
  size: number;
}) {
  const { parsedTiers } = useAllTiers();

  const equippedTiers = useMemo(() => {
    if (!parsedTiers) return;

    const equipped: CategoryLib<TierOrNft> = {};

    const allAssetIds = [...(nftInfo?.outfitIds ?? [])];
    if (nftInfo?.backgroundId) allAssetIds.push(nftInfo.backgroundId);

    const bannyBodyTokenId = parseInt(nftInfo?.tokenId);

    [bannyBodyTokenId, ...allAssetIds].forEach((tokenId) => {
      const tierId = tierIdOfTokenId(tokenId!);
      const assetTier = parsedTiers.find((t) => t.tierId === tierId);

      if (assetTier) {
        equipped[assetTier.category] = {
          ...assetTier,
          tokenId,
        };
      } else {
        console.warn("Error finding tier for NFT with tokenId:", tokenId);
      }
    });

    return equipped;
  }, [nftInfo, parsedTiers]);

  const Img = useCallback(
    () =>
      equippedTiers ? (
        <EquippedTiersPreview equipped={equippedTiers} size={size} />
      ) : null,
    [equippedTiers, size]
  );

  return <Img />;
}
