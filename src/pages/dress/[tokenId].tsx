import FullscreenLoading from "@/components/shared/FullscreenLoading";
import { useNfTsQuery } from "@/generated/graphql";
import DressOwnedBanny from "@/pages/dress/DressOwnedBanny";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { useAccount } from "wagmi";
import DressedBannyNftImage from "../closet/DressedBannyNftImage";
import { BANNYVERSE_COLLECTION_ID } from "@/constants/nfts";

export default function Index() {
  const { address } = useAccount();

  const router = useRouter();

  const tokenId = router.query.tokenId as string | undefined;

  const _tokenId = !tokenId || isNaN(parseInt(tokenId)) ? 0 : parseInt(tokenId);

  const { data: nfts, loading: nftsLoading } = useNfTsQuery({
    variables: {
      where: {
        tokenId: _tokenId as unknown as bigint,
        collection: BANNYVERSE_COLLECTION_ID,
      },
    },
  });

  const nft = useMemo(() => nfts?.nfts[0], [nfts?.nfts]);

  const isOwner = useMemo(
    () => address?.toLowerCase() === nft?.owner.address.toLowerCase(),
    [address, nft]
  );

  if (nftsLoading) return <FullscreenLoading />;

  if (isOwner) return <DressOwnedBanny bannyNft={nft} />;

  return <DressedBannyNftImage nft={nft} size={400} />;
}
