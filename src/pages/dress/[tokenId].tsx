import FullscreenLoading from "@/components/shared/FullscreenLoading";
import ToolbarBagView from "@/components/shared/ToolbarBagView";
import { LOOKS_COLLECTION_ID } from "@/constants/nfts";
import { useNfTsQuery } from "@/generated/graphql";
import DressOwnedBanny from "@/pages/dress/DressOwnedBanny";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { useAccount } from "wagmi";

export default function Index() {
  const { address } = useAccount();

  const router = useRouter();

  const tokenId = router.query.tokenId as string | undefined;

  const _tokenId = !tokenId || isNaN(parseInt(tokenId)) ? 0 : parseInt(tokenId);

  const { data: nfts, loading: nftsLoading } = useNfTsQuery({
    variables: {
      where: {
        tokenId: _tokenId as unknown as bigint,
        collection: LOOKS_COLLECTION_ID,
      },
    },
  });

  const nft = useMemo(() => nfts?.nfts[0], [nfts?.nfts]);

  const isOwner = useMemo(
    () =>
      nft
        ? address?.toLowerCase() === nft?.owner.address.toLowerCase()
        : undefined,
    [address, nft]
  );

  useEffect(() => {
    if (isOwner === false) {
      router.push(`/nft/${nft?.tokenId.toString()}`);
    }
  }, [router, nft, isOwner]);

  const content = useMemo(() => {
    if (nftsLoading) return <FullscreenLoading />;
    return <DressOwnedBanny bannyNft={nft} />;
  }, [nftsLoading, nft]);

  return (
    <ToolbarBagView header={`Dressing room: Banny #${_tokenId}`}>
      {content}
    </ToolbarBagView>
  );
}
