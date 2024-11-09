import ToolbarBagView from "@/components/ToolbarBagView";
import Fuzz from "@/components/pixelRenderers/Fuzz";
import NftTierInfo from "@/components/shared/NftTierInfo";
import RoundedFrame from "@/components/shared/RoundedFrame";
import TierImage from "@/components/shared/TierImage";
import { CATEGORY_IDS } from "@/constants/category";
import { BANNYVERSE_COLLECTION_ID } from "@/constants/nfts";
import { useNfTsQuery } from "@/generated/graphql";
import { useSingleImageSize } from "@/hooks/useSingleImageSize";
import { NFT } from "@/model/nft";
import { parseTier } from "@/utils/parseTier";
import { isArray } from "@apollo/client/utilities";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import DressedBannyNftImage from "../closet/DressedBannyNftImage";

export default function Index() {
  const router = useRouter();

  const tokenId = useMemo(() => {
    const _tokenId = router.query.tokenId;

    return _tokenId && !isArray(_tokenId) && !isNaN(parseInt(_tokenId))
      ? parseInt(_tokenId)
      : 0;
  }, [router.query]);

  const { data } = useNfTsQuery({
    variables: {
      where: {
        tokenId: tokenId as unknown as bigint,
        collection: BANNYVERSE_COLLECTION_ID,
      },
    },
  });

  const size = useSingleImageSize();

  const nft: NFT | undefined = useMemo(() => data?.nfts[0], [data?.nfts]);

  const tier = useMemo(() => (nft ? parseTier(nft?.tier) : undefined), [nft]);

  const NftImage = useCallback(() => {
    if (nft?.category === CATEGORY_IDS["naked"]) {
      return <DressedBannyNftImage nft={nft} size={size} />;
    }

    if (!nft?.tier) {
      return <Fuzz width={size} height={size} pixelSize={8} fill="#808080" />;
    }

    return <TierImage tier={parseTier(nft?.tier)} size={size} />;
  }, [nft, size]);

  return (
    <ToolbarBagView frame header={`Token: ${tier?.name} #${tokenId}`}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexWrap: "wrap",
          padding: 24,
          paddingTop: 20,
          gap: 24,
          paddingBottom: 64,
        }}
      >
        <div>
          <RoundedFrame background={"white"}>
            <NftImage />
          </RoundedFrame>
        </div>

        {tier && (
          <div style={{ maxWidth: 480, overflow: "hidden" }}>
            <NftTierInfo nft={nft} tier={tier} />
          </div>
        )}
      </div>
    </ToolbarBagView>
  );
}
