import { TOOLBAR_HEIGHT } from "@/components/Toolbar";
import Fuzz from "@/components/pixelRenderers/Fuzz";
import RoundedFrame from "@/components/shared/RoundedFrame";
import TierImage from "@/components/shared/TierImage";
import { COLORS } from "@/constants/colors";
import { useNftsOf } from "@/hooks/queries/useNftsOf";
import { parseTier } from "@/utils/parseTier";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { isAddress } from "viem";
import DressedBannyNftImage from "./DressedBannyNftImage";

const Toolbar = dynamic(() => import("@/components/Toolbar"), { ssr: false });

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
    <div>
      <Toolbar />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: TOOLBAR_HEIGHT,
        }}
      >
        <style>{`body { background: ${COLORS.banana} }`}</style>

        <div style={{ marginTop: 20 }}>
          <RoundedFrame
            shadow
            style={{
              height: `calc(100vh - ${TOOLBAR_HEIGHT + 40}px)`,
              overflow: "scroll",
              background: "white",
              padding: 10,
              paddingBottom: 30,
            }}
          >
            <div
              style={{
                minWidth: itemSize * 4,
                display:
                  nfts.loading || !nfts.data?.nfts.length ? "block" : "grid",
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
                  <Fuzz height={120} width={120} pixelSize={8} fill="black" />
                </div>
              ) : nfts.data?.nfts.length ? (
                nfts.data.nfts.map((nft) =>
                  nft.tier.category === 0 ? (
                    <Link key={nft.tokenId} href={`/banny/${nft.tokenId}`}>
                      <div
                        style={{ pointerEvents: "none", position: "relative" }}
                      >
                        <DressedBannyNftImage size={200} nft={nft} />
                        <TokenId tokenId={nft.tokenId} />
                      </div>
                    </Link>
                  ) : (
                    <Link key={nft.tokenId} href={`/asset/${nft.tokenId}`}>
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
          </RoundedFrame>
        </div>
      </div>
    </div>
  );
}
