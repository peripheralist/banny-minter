import Fuzz from "@/components/pixelRenderers/Fuzz";
import CustomHead from "@/components/shared/CustomHead";
import DressedBannyNftImage from "@/components/shared/DressedBannyNftImage";
import NftTierInfo from "@/components/shared/NftTierInfo";
import RoundedFrame from "@/components/shared/RoundedFrame";
import TierImage from "@/components/shared/TierImage";
import ToolbarBagView from "@/components/shared/ToolbarBagView";
import { CATEGORY_IDS } from "@/constants/category";
import { BAN_HOOK } from "@/constants/contracts";
import { useNfTsQuery } from "@/generated/graphql";
import { useRouterNftParams } from "@/hooks/useRouterNftParams";
import { useWindowSize } from "@/hooks/useWindowSize";
import { NFT } from "@/model/nft";
import { parseTier } from "@/utils/parseTier";
import { useCallback, useMemo } from "react";

export default function Index() {
  const { isSmallScreen, width } = useWindowSize();

  const size = useMemo(
    () => Math.min(Math.max(width ? width - 48 : 0, 240), 420),
    [width]
  );

  const { chain, tokenId } = useRouterNftParams("chainTokenId");

  const { data } = useNfTsQuery({
    variables: {
      where: {
        tokenId: tokenId ? BigInt(tokenId) : undefined,
        hook: BAN_HOOK,
        chainId: chain?.id,
      },
    },
  });

  const nft: NFT | undefined = useMemo(() => data?.nfts.items[0], [data?.nfts]);

  const tier = useMemo(() => (nft ? parseTier(nft?.tier) : undefined), [nft]);

  const NftImage = useCallback(() => {
    if (nft?.category === CATEGORY_IDS.body) {
      return <DressedBannyNftImage nft={nft} size={size - 8} />;
    }

    if (!nft?.tier) {
      return <Fuzz width={size} height={size} pixelSize={8} fill="#808080" />;
    }

    return <TierImage tier={parseTier(nft?.tier)} size={size - 8} />;
  }, [nft, size]);

  const title = useMemo(
    () => `${tier?.name ?? "--"} #${tokenId}`,
    [tier, tokenId]
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

                  {tier && <NftTierInfo nft={nft} tier={tier} />}
                </div>
              ),
            },
          ]}
        />
      </main>
    </>
  );
}
