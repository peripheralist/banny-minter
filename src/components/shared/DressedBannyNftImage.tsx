import Fuzz from "@/components/pixelRenderers/Fuzz";
import { NfTsQuery } from "@/generated/graphql";
import { decodeNFTInfo } from "@/utils/decodeNftInfo";

export default function DressedBannyNftImage({
  nft,
  size,
}: {
  nft: NfTsQuery["nfts"][number] | undefined;
  size: number;
}) {
  const info = decodeNFTInfo(nft?.tokenUri);

  if (!info) return <Fuzz fill="#ccc" width={size} height={size} />;

  return <object data={info.image} width={size} height={size} />;
}
