import CustomHead from "@/components/shared/CustomHead";
import DressedBannyNftImage from "@/components/shared/DressedBannyNftImage";
import NftTierInfo from "@/components/shared/NftTierInfo";
import RoundedFrame from "@/components/shared/RoundedFrame";
import TierImage from "@/components/shared/TierImage";
import ToolbarBagView from "@/components/shared/ToolbarBagView";
import { BAN_HOOK } from "@/constants/contracts";
import { useNftQuery } from "@/generated/graphql";
import { useRouterNftParams } from "@/hooks/useRouterNftParams";
import { useWindowSize } from "@/hooks/useWindowSize";
import { parseTierOrNft } from "@/utils/parseTier";
import { useCallback, useMemo } from "react";

export default function Index() {
  const { chain, tokenId } = useRouterNftParams("chainTokenId");

  return chain && tokenId ? (
    <Main tokenId={tokenId} chainId={chain.id} />
  ) : null;
}

function Main({ tokenId, chainId }: { tokenId: number; chainId: number }) {
  const { isSmallScreen, width } = useWindowSize();

  const size = useMemo(
    () => Math.min(Math.max(width ? width - 48 : 0, 240), 420),
    [width]
  );

  const { data: _nft } = useNftQuery({
    variables: {
      tokenId: BigInt(tokenId),
      hook: BAN_HOOK,
      chainId,
    },
  });

  const nft = useMemo(
    () => (_nft?.nft ? parseTierOrNft(_nft.nft) : undefined),
    [_nft]
  );

  const NftImage = useCallback(() => {
    if (nft?.category === "body") {
      return <DressedBannyNftImage nft={nft} size={size - 8} />;
    }

    return <TierImage tier={nft} size={size - 8} />;
  }, [nft, size]);

  const title = useMemo(
    () => `${nft?.metadata?.productName ?? "--"} #${tokenId}`,
    [nft, tokenId]
  );

  return (
    <>
      <CustomHead title={title} />

      <main>
        <ToolbarBagView
          sections={[
            {
              header: title,
              content: (
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    padding: isSmallScreen ? 12 : 24,
                    paddingBottom: 80,
                    gap: 24,
                  }}
                >
                  <div>
                    <RoundedFrame background={"white"}>
                      <NftImage />
                    </RoundedFrame>
                  </div>

                  {nft && <NftTierInfo tierOrNft={nft} />}
                </div>
              ),
            },
          ]}
        />
      </main>
    </>
  );
}
