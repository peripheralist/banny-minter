import { COLORS } from "@/constants/colors";
import { MinterContext } from "@/contexts/minterContext";
import { useBodies } from "@/hooks/queries/useBodies";
import { useTierPrice } from "@/hooks/useTierPrice";
import { useWindowWidth } from "@/hooks/useWindowWidth";
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
import BannyButtons from "./BannyButtons";
import AssetButton from "./AssetButton";
import { assetTypes } from "@/constants/assetTypes";

export default function LargeView() {
  const { address } = useAccount();
  const { body, randomize, tab, setTab } = useContext(MinterContext);
  const [containerHeight, setContainerHeight] = useState<number>(0);

  const [activeTab] = tab;

  const bodies = useBodies();

  const bodyPrice = useTierPrice({ assetType: "BODY", tierId: body?.tierId });
  const totalPrice = bodyPrice.data;
  const { mint, isLoading, tx } = useMint({
    amount: totalPrice,
    tierIds: [...(body ? [BigInt(body.tierId)] : [])],
  });

  const mintTxPending = isLoading || tx.status === "loading";

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

  const windowWidth = useWindowWidth();
  const gridCols = useMemo(
    () => (windowWidth && windowWidth < 1200 ? 2 : 3),
    [windowWidth]
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyItems: "flex-start",
              position: "relative",
              height: "100%",
              boxSizing: "border-box",
              gap: 10,
            }}
          >
            <BannyButtons
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 8,
              }}
              buttonStyle={{ height: 40, width: 40 }}
            />

            {assetTypes.map((t) => (
              <AssetButton
                key={t}
                asset={t}
                active={activeTab === t}
                onClick={
                  activeTab === t || !setTab ? undefined : () => setTab(t)
                }
              />
            ))}

            <ButtonPad
              style={{ height: 40, fontSize: "1.4rem" }}
              onClick={randomize}
            >
              RANDOMIZE
            </ButtonPad>
          </div>

          <GridSelector
            style={{ padding: 24 }}
            gridRows={gridRows}
            gridCols={gridCols}
            imageSize={120}
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
              height: "100%",
              background: "white",
            }}
          >
            <NFTImage imageSize={440} />
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
                disabled={mintTxPending || !address}
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
                {mintTxPending ? (
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
