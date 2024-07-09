import FullscreenLoading from "@/components/shared/FullscreenLoading";
import { useNfTsQuery } from "@/generated/graphql";
import DressOwnedBanny from "@/pages/banny/DressOwnedBanny";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { useAccount } from "wagmi";
import PreviewUnownedBanny from "./PreviewUnownedBanny";

export default function Index() {
  const { address } = useAccount();

  const router = useRouter();

  const tokenId = router.query.tokenId as string | undefined;

  const _tokenId = !tokenId || isNaN(parseInt(tokenId)) ? 0 : parseInt(tokenId);

  const { data: nft, loading: nftsLoading } = useNfTsQuery({
    variables: {
      where: { tokenId: _tokenId as unknown as bigint },
    },
  });

  const isOwner = useMemo(
    () => address?.toLowerCase() === nft?.nfts[0].owner.address.toLowerCase(),
    [address, nft]
  );

  if (nftsLoading) return <FullscreenLoading />;

  if (isOwner) return <DressOwnedBanny bannyNft={nft?.nfts[0]} />;

  return <PreviewUnownedBanny bannyNft={nft?.nfts[0]} size={400} />;
}
