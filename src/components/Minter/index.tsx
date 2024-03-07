import { COLORS } from "@/constants/colors";
import { MinterContext } from "@/contexts/minterContext";
import { useTierPrice } from "@/hooks/useTierPrice";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { TOOLBAR_HEIGHT } from "../Toolbar";
import Fuzz from "../pixelRenderers/Fuzz";
import ButtonPad from "../shared/ButtonPad";
import RoundedFrame from "../shared/RoundedFrame";
import Controls from "./Controls";
import GridSelector from "./GridSelector";
import NFTImage from "./NFTImage";
import Summary from "./Summary";

export default function Index() {
  const { body } = useContext(MinterContext);
  const [mintLoading, setMintLoading] = useState<boolean>();
  const [containerHeight, setContainerHeight] = useState<number>(0);

  const bodyPrice = useTierPrice({ assetType: "BODY", tierId: body });
  const totalPrice = bodyPrice.data;

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => {
      if (!ref.current) return;
      setContainerHeight(ref.current.offsetHeight);
    };

    fn();
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  const gridRows = useMemo(() => {
    if (containerHeight > 800) return 5;
    if (containerHeight > 720) return 4;
    return 3;
  }, [containerHeight]);

  return (
    <div
      ref={ref}
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
          // justifyContent: "flex-end",
          height: "100%",
        }}
      >
        {/* <div style={{ textTransform: "uppercase" }}>
          <h1
            style={{
              margin: 0,
              fontSize: "1.6rem",
              letterSpacing: 6,
            }}
          >
            MINT A BANNY
          </h1>
        </div> */}

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
            <ButtonPad
              style={{
                width: 150,
                height: 100,
                color: "white",
                fontSize: "3rem",
              }}
              fillFg={COLORS.pink}
              onClick={() => {
                setMintLoading(true);

                setTimeout(() => setMintLoading(false), 2000);
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
                "MINT"
              )}
            </ButtonPad>

            <div
              style={{
                fontSize: "2.4rem",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {totalPrice} ETH
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
