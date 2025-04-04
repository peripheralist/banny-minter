import Fuzz from "@/components/pixelRenderers/Fuzz";
import { useBannyEquippedTiers } from "@/hooks/queries/useBannyEquippedTiers";
import { NFT } from "@/model/nft";
import { decodeNFTInfo } from "@/utils/decodeNftInfo";
import { useCallback } from "react";
import Downloadable from "./Downloadable";
import EquippedTiersPreview from "./EquippedTiersPreview";

export default function DressedBannyNftImage({
  nft,
  size,
  download,
}: {
  nft: NFT | undefined;
  size: number;
  download?: boolean;
}) {
  const { data: equippedTiers } = useBannyEquippedTiers(nft);

  const info = decodeNFTInfo(nft?.tokenUri);
  // if (!info) return <Fuzz fill="#ccc" width={size} height={size} />;
  // return <object data={info.image} width={size} height={size} />;

  const Image = useCallback(
    () =>
      equippedTiers ? (
        <EquippedTiersPreview equipped={equippedTiers} size={size} />
      ) : null,
    [equippedTiers, size]
  );

  if (!info || !nft || !equippedTiers) {
    return <Fuzz fill="#ccc" width={size} height={size} />;
  }

  return download ? (
    <Downloadable
      downloadHref={info.image}
      fileName={`banny-#${nft.tokenId.toString()}.svg`}
    >
      <Image />
    </Downloadable>
  ) : (
    <Image />
  );
}
