import Fuzz from "@/components/pixelRenderers/Fuzz";
import { NfTsQuery } from "@/generated/graphql";
import { useBannyEquippedTiers } from "@/hooks/queries/useBannyEquippedTiers";
import { decodeNFTInfo } from "@/utils/decodeNftInfo";
import { useCallback } from "react";
import Downloadable from "./Downloadable";
import EquippedTiersPreview from "./EquippedTiersPreview";

export default function DressedBannyNftImage({
  nft,
  size,
  download,
}: {
  nft: NfTsQuery["nfts"][number] | undefined;
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
