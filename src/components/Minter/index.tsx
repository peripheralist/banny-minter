import { COLORS } from "@/constants/colors";
import { MinterContext } from "@/contexts/minterContext";
import { useBodies } from "@/hooks/queries/useBodies";
import { useTierPrice } from "@/hooks/useTierPrice";
import { useMint } from "@/hooks/writeContract/useMint";
import { formatEther } from "juice-sdk-core";
import { useCallback, useContext, useMemo, useState } from "react";
import { useAccount } from "wagmi";
import { TOOLBAR_HEIGHT } from "../Toolbar";
import Fuzz from "../pixelRenderers/Fuzz";
import ButtonPad from "../shared/ButtonPad";
import RoundedFrame from "../shared/RoundedFrame";
import Controls from "./Controls";
import GridSelector from "./GridSelector";
import NFTImage from "./NFTImage";
import Summary from "./Summary";

export default function Index() {
  const { address } = useAccount();
  const { body } = useContext(MinterContext);
  const [containerHeight, setContainerHeight] = useState<number>(0);

  const bodies = useBodies();
  const bodyPrice = useTierPrice({ assetType: "BODY", tierId: body });
  const totalPrice = bodyPrice.data;
  const { mint, isLoading: mintLoading } = useMint({
    amount: totalPrice,
    tierIds: [...(body ? [BigInt(body)] : [])],
  });

  const measuredRef = useCallback((node: HTMLDivElement) => {
    const fn = () => {
      setContainerHeight(node.getBoundingClientRect().height);
    };

    if (node !== null) {
      window.removeEventListener("resize", fn);
      window.addEventListener("resize", fn);
      setContainerHeight(node.getBoundingClientRect().height);
    }
  }, []);

  const gridRows = useMemo(
    () => 3 + Math.max(Math.floor((containerHeight - 600) / 128), 0),
    [containerHeight]
  );

  if (bodies.loading) {
    return (
      <div
        style={{
          width: "100vw",
          height: `calc(100vh - ${TOOLBAR_HEIGHT}px)`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <Fuzz width={200} height={200} fill="black" pixelSize={10} />
        <h1>Loading</h1>
      </div>
    );
  }

  return (
    <div
      ref={measuredRef}
      style={{
        width: "100vw",
        height: `calc(100vh - ${TOOLBAR_HEIGHT}px)`,
        marginTop: TOOLBAR_HEIGHT,
        overflow: "hidden",
        minHeight: 600,
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        padding: 32,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <div
          style={{
            padding: 0,
            display: "flex",
            alignItems: "flex-end",
            gap: 24,
            boxSizing: "border-box",
            height: "100%",
          }}
        >
          <Controls style={{ height: "100%" }} />

          <GridSelector
            style={{ padding: 24 }}
            gridRows={gridRows}
            gridCols={3}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          flex: 1,
          height: "100%",
          marginLeft: 24,
          gap: 24,
        }}
      >
        <RoundedFrame shadow style={{ width: "100%", height: "100%" }}>
          <div
            style={{
              position: "relative",
              height: "100%",
              background: "white",
              // background: "#eef",
            }}
          >
            <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
              <NFTImage />
            </div>

            {/* <PixelShape
              style={{ position: "absolute", bottom: 0, left: 20 }}
              width={64}
              height={32}
              plot={(x, y) => y <= 0.5 * x}
              fill="#DDE"
            />
            <PixelShape
              style={{
                position: "absolute",
                bottom: 0,
                right: 20,
                transform: `scale(-1,1)`,
              }}
              width={64}
              height={32}
              plot={(x, y) => y <= 0.5 * x}
              fill="#DDE"
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 84,
                right: 84,
                height: 32,
                background: "#DDE",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 32,
                top: 0,
                right: 84,
                left: 84,
                background: "white",
              }}
            /> */}
            {/* <div
              style={{
                position: "absolute",
                bottom: 32,
                top: 0,
                left: 80,
                width: 4,
                background: "#99A",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 32,
                top: 0,
                right: 80,
                width: 4,
                background: "#99A",
              }}
            /> */}
          </div>
        </RoundedFrame>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}
        >
          <div
            style={{
              display: "flex",
              flex: 1,
              height: "100%",
            }}
          >
            <RoundedFrame style={{ flex: 1, height: "100%" }}>
              <div
                style={{
                  background: "black",
                  padding: 20,
                  height: "100%",
                  boxSizing: "border-box",
                }}
              >
                <Summary />
              </div>
            </RoundedFrame>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 20,
            }}
          >
            <RoundedFrame>
              <ButtonPad
                disabled={mintLoading || !address}
                style={{
                  width: 150,
                  height: 100,
                  padding: 1,
                }}
                fillFg={COLORS.pink}
                onClick={() => {
                  mint();
                }}
              >
                {mintLoading ? (
                  <Fuzz
                    width={80}
                    height={32}
                    fill="white"
                    pixelSize={4}
                    interval={500}
                  />
                ) : (
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: "3rem",
                    }}
                  >
                    <div
                      style={{
                        opacity: address ? 1 : 0.25,
                        color: address ? "white" : "black",
                      }}
                    >
                      Mint
                    </div>
                    {!address && (
                      <div
                        style={{
                          fontSize: "1.6rem",
                          textTransform: "uppercase",
                          color: "white",
                        }}
                      >
                        No wallet
                      </div>
                    )}
                  </div>
                )}
              </ButtonPad>

              <div
                style={{
                  padding: 8,
                  fontSize: "2rem",
                  textAlign: "center",
                  fontWeight: "bold",
                  background: "#ffffff",
                }}
              >
                {totalPrice ? formatEther(totalPrice).substring(0, 6) : "--"}{" "}
                ETH
              </div>
            </RoundedFrame>
          </div>
        </div>
      </div>
    </div>
  );
}
