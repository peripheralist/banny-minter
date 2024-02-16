import { ASSETS } from "@/constants/assets";
import { EditorContext } from "@/contexts/editorContext";
import { CSSProperties, useContext, useEffect } from "react";
import Fuzz from "../Fuzz";
import ButtonPadLight from "../shared/ButtonPadLight";
import AssetButton from "./AssetButton";

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

  useEffect(() => {
    if (!randomize) return;

    const listener = (e: KeyboardEvent) => {
      switch (e.code) {
        case "Space":
          randomize();
          break;
      }
    };

    document.addEventListener("keypress", listener);

    return () => document.removeEventListener("keypress", listener);
  }, [randomize]);

  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        justifyContent: "space-between",
        padding: 20,
        gap: 20,
        border: "4px solid black",
        ...style,
      }}
    >
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

      {tabs.map((t) => (
        <AssetButton
          key={t}
          asset={t}
          active={activeTab === t}
          onClick={activeTab === t || !setTab ? undefined : () => setTab(t)}
        />
      ))}

      <div
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
      />
    </div>
  );
}
