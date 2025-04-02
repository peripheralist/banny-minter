import EquippedTiersPreview from "@/components/shared/EquippedTiersPreview";
import { useAllTiers } from "@/hooks/queries/useAllTiers";
import { NFTInfo } from "@/model/nftInfo";
import { EquippedTiers, Tier } from "@/model/tier";
import { tierIdOfTokenId } from "@/utils/tierIdOfTokenId";
import { useCallback, useMemo } from "react";

export default function DressedBannyElem({
  nftInfo,
  size,
}: {
  nftInfo: NFTInfo;
  size: number;
}) {
  const { tiers } = useAllTiers();

  const equippedTiers = useMemo(() => {
    if (!tiers) return;

    const equipped: EquippedTiers = {};

    const allAssetIds = [...(nftInfo?.outfitIds ?? [])];
    if (nftInfo?.backgroundId) allAssetIds.push(nftInfo.backgroundId);

    const bannyBodyTokenId = parseInt(nftInfo?.tokenId);

    [bannyBodyTokenId, ...allAssetIds].forEach((tokenId) => {
      const tierId = tierIdOfTokenId(tokenId!);
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
  }, [nftInfo, tiers]);

  const Image = useCallback(
    () =>
      equippedTiers ? (
        <EquippedTiersPreview equipped={equippedTiers} size={size} />
      ) : null,
    [equippedTiers, size]
  );

  return <Image />;
}
