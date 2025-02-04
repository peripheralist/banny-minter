import Modal from "@/components/shared/Modal";
import NftTierInfo from "@/components/shared/NftTierInfo";
import RoundedFrame from "@/components/shared/RoundedFrame";
import TierImage from "@/components/shared/TierImage";
import { CATEGORY_IDS } from "@/constants/category";
import { LOOKS_COLLECTION_ID } from "@/constants/nfts";
import { useNfTsQuery } from "@/generated/graphql";
import { useWindowSize } from "@/hooks/useWindowSize";
import { NFT } from "@/model/nft";
import { parseTier } from "@/utils/parseTier";
import { isArray } from "@apollo/client/utilities";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import Fuzz from "../pixelRenderers/Fuzz";
import DressedBannyNftImage from "../shared/DressedBannyNftImage";
import Loading from "../shared/Loading";

const routerKey = "nft";

export default function NFTDetailModal() {
  const { width, isSmallScreen } = useWindowSize();

  const router = useRouter();

  const tokenId = useMemo(() => {
    const _tokenId = router.query[routerKey];

    return _tokenId && !isArray(_tokenId) && !isNaN(parseInt(_tokenId))
      ? parseInt(_tokenId)
      : 0;
  }, [router.query]);

  const { data } = useNfTsQuery({
    variables: {
      where: {
        tokenId: tokenId as unknown as bigint,
        collection: LOOKS_COLLECTION_ID,
      },
    },
  });

  const nft: NFT | undefined = useMemo(() => data?.nfts[0], [data?.nfts]);

  const tier = useMemo(() => (nft ? parseTier(nft?.tier) : undefined), [nft]);

  const imgSize = useMemo(
    () => Math.min(Math.max(width ? width - 96 : 0, 240), 420),
    [width]
  );

  const NftImage = useCallback(() => {
    if (nft?.category === CATEGORY_IDS["naked"]) {
      return <DressedBannyNftImage nft={nft} size={imgSize - 8} />;
    }

    if (!nft?.tier) {
      return (
        <Fuzz width={imgSize} height={imgSize} pixelSize={8} fill="#808080" />
      );
    }

    return <TierImage tier={parseTier(nft?.tier)} size={imgSize - 8} />;
  }, [nft, imgSize]);

  const onClose = useCallback(() => {
    if (!router.query[routerKey]) return;

    const newPath = router.asPath.split("?nft=")[0];
    router.replace(newPath, undefined, { shallow: true });
  }, [router]);

  if (!nft) return null;

  return (
    <Modal
      open={!!tokenId}
      onClose={onClose}
      action={{
        onClick: () => {
          router.push(`/nft/${tokenId.toString()}`);
        },
        text: "View page",
      }}
    >
      {nft ? (
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <RoundedFrame background={"white"}>
              <NftImage />
            </RoundedFrame>
          </div>

          {tier && <NftTierInfo nft={nft} tier={tier} />}
        </div>
      ) : (
        <Loading />
      )}
    </Modal>
  );
}
