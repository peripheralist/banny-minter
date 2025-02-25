import Modal from "@/components/shared/Modal";
import NftTierInfo from "@/components/shared/NftTierInfo";
import RoundedFrame from "@/components/shared/RoundedFrame";
import TierImage from "@/components/shared/TierImage";
import { CATEGORY_IDS } from "@/constants/category";
import { BAN_HOOK } from "@/constants/contracts";
import { useNfTsQuery } from "@/generated/graphql";
import { useRouterNftParams } from "@/hooks/useRouterNftParams";
import { useWindowSize } from "@/hooks/useWindowSize";
import { NFT } from "@/model/nft";
import { createApolloClient } from "@/utils/createApolloClient";
import { parseTier } from "@/utils/parseTier";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import Fuzz from "../pixelRenderers/Fuzz";
import DressedBannyNftImage from "../shared/DressedBannyNftImage";
import Loading from "../shared/Loading";

const routerKey = "nft";

export default function NFTDetailModal() {
  const { width } = useWindowSize();

  const router = useRouter();

  const { chain, tokenId } = useRouterNftParams(routerKey);

  const apolloClient = useMemo(
    () => (chain ? createApolloClient(chain) : undefined),
    [chain]
  );

  const { data } = useNfTsQuery({
    client: apolloClient,
    variables: {
      where: {
        tokenId: tokenId as unknown as bigint,
        collection: BAN_HOOK,
      },
    },
  });

  const nft: NFT | undefined = useMemo(() => data?.nfts[0], [data?.nfts]);

  const tier = useMemo(() => (nft ? parseTier(nft?.tier) : undefined), [nft]);

  const imgSize = useMemo(
    () => Math.min(Math.max(width ? width - 96 : 0, 240), 400),
    [width]
  );

  const NftImage = useCallback(() => {
    if (nft?.category === CATEGORY_IDS.body) {
      return <DressedBannyNftImage nft={nft} size={imgSize} />;
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

    const newPath = router.asPath.split(`?${routerKey}=`)[0];
    router.replace(newPath, undefined, { shallow: true });
  }, [router]);

  if (!nft) return null;

  return (
    <Modal
      open={!!tokenId}
      onClose={onClose}
      action={{
        onClick: () => {
          router.push(`/nft/${chain?.id}:${tokenId?.toString()}`);
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

          {tier && <NftTierInfo nft={nft} tier={tier} chain={chain} />}
        </div>
      ) : (
        <Loading />
      )}
    </Modal>
  );
}
