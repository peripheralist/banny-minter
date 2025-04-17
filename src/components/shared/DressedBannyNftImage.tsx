import Fuzz from "@/components/pixelRenderers/Fuzz";
import { useBannyEquippedTiers } from "@/hooks/queries/useBannyEquippedTiers";
import { NFT } from "@/model/nft";
import { NFTMetadata } from "@/model/nftInfo";
import { useCallback } from "react";
import Downloadable from "./Downloadable";
import EquippedTiersPreview from "./EquippedTiersPreview";

export default function DressedBannyNftImage({
  nft,
  size,
  download,
}: {
  nft: Pick<NFT, "tier" | "tokenId" | "metadata"> | undefined;
  size: number;
  download?: boolean;
}) {
  const { data: equippedTiers } = useBannyEquippedTiers(nft);

  // if (!info) return <Fuzz fill="#ccc" width={size} height={size} />;
  // return <object data={info.image} width={size} height={size} />;

  const Preview = useCallback(
    () =>
      equippedTiers ? (
        <EquippedTiersPreview equipped={equippedTiers} size={size} />
      ) : null,
    [equippedTiers, size]
  );

  if (!nft || !equippedTiers) {
    return <Fuzz fill="#ccc" width={size} height={size} />;
  }

  const info = nft.metadata as NFTMetadata;

  return download && info ? (
    <Downloadable
      downloadHref={info.image}
      fileName={`banny-#${nft.tokenId.toString()}.svg`}
    >
      <Preview />
    </Downloadable>
  ) : (
    <Preview />
  );
}
