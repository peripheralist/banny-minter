import Modal from "@/components/shared/Modal";
import NftTierInfo from "@/components/shared/NftTierInfo";
import RoundedFrame from "@/components/shared/RoundedFrame";
import TierImage from "@/components/shared/TierImage";
import { BAN_HOOK } from "@/constants/contracts";
import { useNftQuery } from "@/generated/graphql";
import { useRouterNftParams } from "@/hooks/useRouterNftParams";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Chain } from "@/model/chain";
import { parseTierOrNft } from "@/utils/parseTier";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import Fuzz from "../pixelRenderers/Fuzz";
import DressedBannyNftImage from "../shared/DressedBannyNftImage";
import Loading from "../shared/Loading";

const routerKey = "nft";

export default function NFTDetailModal() {
  const router = useRouter();

  const { chain, tokenId } = useRouterNftParams(routerKey);

  const onClose = useCallback(() => {
    if (!router.query[routerKey]) return;

    const newPath = router.asPath.split(`?${routerKey}=`)[0];
    router.replace(newPath, undefined, { shallow: true });
  }, [router]);

  return tokenId && chain ? (
    <NFTDetail tokenId={tokenId} chain={chain} onClose={onClose} />
  ) : null;
}

function NFTDetail({
  tokenId,
  chain,
  onClose,
}: {
  tokenId: number;
  chain: Chain;
  onClose: VoidFunction;
}) {
  const { data } = useNftQuery({
    variables: {
      tokenId: BigInt(tokenId),
      hook: BAN_HOOK,
      chainId: chain.id,
    },
  });

  const nft = useMemo(
    () => (data?.nft ? parseTierOrNft(data.nft) : undefined),
    [data?.nft]
  );

  const { width } = useWindowSize();

  const imgSize = useMemo(
    () => Math.min(Math.max(width ? width - 96 : 0, 240), 400),
    [width]
  );

  const NftImage = useCallback(() => {
    if (nft?.category === "body") {
      return <DressedBannyNftImage nft={nft} size={imgSize} download />;
    }

    if (!nft) {
      return (
        <Fuzz width={imgSize} height={imgSize} pixelSize={8} fill="#808080" />
      );
    }

    return <TierImage tier={nft} size={imgSize - 8} />;
  }, [nft, imgSize]);

  return (
    <Modal
      id="nft-detail"
      open
      onClose={onClose}
      // action={{
      //   onClick: () => {
      //     router.push(`/nft/${chain?.id}:${tokenId?.toString()}`);
      //   },
      //   text: "View page",
      // }}
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
            <RoundedFrame
              borderColor="white"
              background={"white"}
              style={{ paddingBottom: 0 }}
            >
              <NftImage />
            </RoundedFrame>
          </div>

          {nft && <NftTierInfo tierOrNft={nft} />}
        </div>
      ) : (
        <Loading />
      )}
    </Modal>
  );
}
