import { useState } from "react";
import Button from "../Button";
import Controls from "./Controls";
import NFTImage from "./NFTImage";
import Summary from "../Summary";
import GridSelector from "./GridSelector";
import ButtonPad from "../shared/ButtonPad";

export default function Index() {
  const [mintLoading, setMintLoading] = useState<boolean>();

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        boxSizing: "border-box",
        padding: 40,
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
        }}
      >
        <GridSelector />

        <Controls />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          flexDirection: "column",
          justifyContent: "flex-end",
          gap: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 80,
          }}
        >
          <NFTImage />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              flex: 1,
              justifyContent: "space-between",
              padding: 20,
              border: "4px solid black",
            }}
          >
            <Summary />

            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                width: 6,
                background: "#00000064",
                zIndex: 1,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 6,
                right: 0,
                height: 6,
                background: "#00000064",
                zIndex: 1,
              }}
            />
          </div>

          <ButtonPad
            style={{
              width: 106,
              height: 106,
              color: "white",
              fontSize: "3rem",
            }}
            fillFg="#e221a0"
          >
            MINT
          </ButtonPad>
        </div>
      </div>
    </div>
  );
}
