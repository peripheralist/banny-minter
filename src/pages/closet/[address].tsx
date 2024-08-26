import SingleFrameToolbarView from "@/components/SingleFrameToolbarView";
import { TOOLBAR_HEIGHT } from "@/components/Toolbar";
import Fuzz from "@/components/pixelRenderers/Fuzz";
import TierImage from "@/components/shared/TierImage";
import { useNftsOf } from "@/hooks/queries/useNftsOf";
import { parseTier } from "@/utils/parseTier";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { isAddress } from "viem";
import DressedBannyNftImage from "./DressedBannyNftImage";
import { FONT_SIZE } from "@/constants/fontSize";

const itemSize = 200;

export default function Index() {
  const router = useRouter();

  const address = router.query.address as `0x${string}` | undefined;

  const nfts = useNftsOf(address);

  const TokenId = useCallback(
    ({ tokenId }: { tokenId: bigint }) => (
      <div
        style={{
          position: "absolute",
          bottom: -12,
          left: 10,
          right: 10,
          color: "#00000088",
          textAlign: "center",
          fontSize: FONT_SIZE.sm,
        }}
      >
        #{tokenId.toString()}
      </div>
    ),
    []
  );

  if (!address || Array.isArray(address) || !isAddress(address)) {
    return <div>Bad route</div>;
  }

  return (
    <SingleFrameToolbarView>
      <div
        style={{
          minWidth: itemSize * 4,
          display: nfts.loading || !nfts.data?.nfts.length ? "block" : "grid",
          gridTemplateColumns: `repeat(4, 1fr)`,
          gap: 20,
        }}
      >
        {nfts.loading ? (
          <div
            style={{
              height: `calc(84vh - ${TOOLBAR_HEIGHT}px)`,
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Fuzz height={120} width={120} />
          </div>
        ) : nfts.data?.nfts.length ? (
          nfts.data.nfts.map((nft) =>
            nft.tier.category === 0 ? (
              <Link key={nft.tokenId} href={`/nft/${nft.tokenId}`}>
                <div style={{ pointerEvents: "none", position: "relative" }}>
                  <DressedBannyNftImage size={200} nft={nft} />
                  <TokenId tokenId={nft.tokenId} />
                </div>
              </Link>
            ) : (
              <Link key={nft.tokenId} href={`/nft/${nft.tokenId}`}>
                <div
                  style={{
                    width: 200,
                    height: 200,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    pointerEvents: "none",
                    position: "relative",
                  }}
                >
                  <TierImage tier={parseTier(nft.tier)} size={160} />
                  <TokenId tokenId={nft.tokenId} />
                </div>
              </Link>
            )
          )
        ) : (
          <div
            style={{
              display: "flex",
              height: `calc(84vh - ${TOOLBAR_HEIGHT}px)`,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>Closet is empty</div>
          </div>
        )}
      </div>
    </SingleFrameToolbarView>
  );
}
