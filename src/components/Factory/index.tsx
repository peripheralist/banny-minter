import { useState } from "react";
import Fuzz from "../Fuzz";
import Summary from "../Summary";
import ButtonPad from "../shared/ButtonPad";
import RoundedFrame from "../shared/RoundedFrame";
import Controls from "./Controls";
import GridSelector from "./GridSelector";
import NFTImage from "./NFTImage";
import PixelShape from "../PixelShape";
import { COLORS } from "@/constants/colors";

export default function Index() {
  const [mintLoading, setMintLoading] = useState<boolean>();

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        minHeight: 810,
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
        <div style={{ textTransform: "uppercase" }}>
          <h1
            style={{
              margin: 0,
              fontSize: "1.6rem",
              letterSpacing: 6,
            }}
          >
            1-800-BANNY4U{" "}
            <span style={{ fontWeight: "lighter", opacity: 0.5 }}>
              A JUICEBOX PRODUCTION
            </span>
          </h1>
        </div>

        <div
          style={{
            padding: 0,
            display: "flex",
            alignItems: "flex-end",
            gap: 32,
            boxSizing: "border-box",
          }}
        >
          <Controls style={{ padding: 32 }} />

          <GridSelector
            style={{ padding: 32, gap: 32 }}
            gridRows={4}
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
          marginLeft: 32,
          gap: 32,
        }}
      >
        <RoundedFrame shadow style={{ width: "100%", height: "100%" }}>
          <div
            style={{
              position: "relative",
              height: "100%",
              background: "#eef",
            }}
          >
            <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
              <NFTImage />
            </div>

            <PixelShape
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
            />
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
              paddingRight: 6,
              paddingTop: 6,
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
              4.20 ETH
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
