import { ASSETS } from "@/constants/assets";
import { EditorContext } from "@/contexts/editorContext";
import { CSSProperties, useCallback, useContext, useEffect } from "react";
import Fuzz from "../Fuzz";
import ButtonPadLight from "../shared/ButtonPadLight";
import AssetButton from "./AssetButton";
import ButtonPad from "../shared/ButtonPad";
import RoundedFrame from "../shared/RoundedFrame";
import { COLORS } from "@/constants/colors";

export type AssetType = keyof typeof ASSETS;

export const tabs: AssetType[] = [
  "BACKGROUND",
  "OUTFIT",
  "HEADGEAR",
  "GRIP_RIGHT",
];

export default function Controls({ style }: { style?: CSSProperties }) {
  const { body, setBody, randomize, tab, setTab } = useContext(EditorContext);

  const [activeTab] = tab;

  const BannyButtons = useCallback(
    () => (
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {ASSETS["BODY"].map((b) => {
          let color = "";
          switch (b) {
            case "alien.png":
              color = "#1dbc00";
              break;
            case "_banny.png":
              color = "#ffc407";
              break;
            case "orange.png":
              color = "#ea5608";
              break;
            case "pink.png":
              color = "#ff5bb3";
              break;
          }

          return (
            <ButtonPadLight
              key={b}
              style={{ height: 40, width: 40 }}
              fillFg={color}
              onClick={() => setBody?.(b)}
              active={body === b}
            />
          );
        })}
      </div>
    ),
    [body, setBody]
  );

  return (
    <RoundedFrame shadow>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          height: "100%",
          boxSizing: "border-box",
          gap: 20,
          background: "#00000044",
          ...style,
        }}
      >
        <BannyButtons />

        {tabs.map((t) => (
          <AssetButton
            key={t}
            asset={t}
            active={activeTab === t}
            onClick={activeTab === t || !setTab ? undefined : () => setTab(t)}
          />
        ))}

        <ButtonPad
          style={{ height: 40, fontSize: "1.4rem" }}
          onClick={randomize}
        >
          RANDOMIZE
        </ButtonPad>

        {/* <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            width: 6,
            background: "#00000064",
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
          }}
        /> */}
      </div>
    </RoundedFrame>
  );
}
