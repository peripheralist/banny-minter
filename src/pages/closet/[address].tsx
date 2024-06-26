import { TOOLBAR_HEIGHT } from "@/components/Toolbar";
import Fuzz from "@/components/pixelRenderers/Fuzz";
import RoundedFrame from "@/components/shared/RoundedFrame";
import { COLORS } from "@/constants/colors";
import { useNftsOf } from "@/hooks/queries/useNftsOf";
import { decodeNFTInfo } from "@/utils/decodeNftInfo";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { isAddress } from "viem";
import { useEnsName } from "wagmi";

const Toolbar = dynamic(() => import("@/components/Toolbar"), { ssr: false });

const itemSize = 200;

export default function Index() {
  const router = useRouter();

  const address = router.query.address as `0x${string}` | undefined;

  const { data: ensName } = useEnsName({ address });

  const nfts = useNftsOf(address);

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
        <h1>
          {ensName ?? address}
          {"'"}s Closet
        </h1>

        <div>
          <RoundedFrame
            shadow
            style={{
              height: `calc(84vh - ${TOOLBAR_HEIGHT}px)`,
              overflow: "scroll",
              background: "white",
            }}
          >
            <div
              style={{
                minWidth: itemSize * 4,
                display:
                  nfts.loading || !nfts.data?.nfts.length ? "block" : "grid",
                gridTemplateColumns: `repeat(4, 1fr)`,
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
                nfts.data.nfts.map((n) => {
                  const src = decodeNFTInfo(n.tokenUri)?.image;
                  if (!src) return null;
                  return (
                    <Link
                      key={n.tokenId}
                      href={
                        n.tier.tierId <= 4
                          ? `/banny/${n.tokenId}`
                          : `/asset/${n.tokenId}`
                      }
                    >
                      <object
                        style={{ pointerEvents: "none" }}
                        width={200}
                        height={200}
                        data={src}
                      />
                    </Link>
                  );
                })
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
