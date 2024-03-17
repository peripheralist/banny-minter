import { MinterContext } from "@/contexts/minterContext";
import { AssetType } from "@/model/assetType";
import { CSSProperties, useContext } from "react";
import ButtonPad from "../shared/ButtonPad";
import AssetButton from "./AssetButton";
import BannyButtons from "./BannyButtons";

export const tabs: AssetType[] = [
  "OUTFIT",
  "BACKGROUND",
  "HEADGEAR",
  "GRIP_RIGHT",
];

export default function Controls({ style }: { style?: CSSProperties }) {
  const { randomize, tab, setTab } = useContext(MinterContext);

  const [activeTab] = tab;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "flex-start",
        position: "relative",
        height: "100%",
        boxSizing: "border-box",
        gap: 10,
        // background: "#00000044",
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

      <ButtonPad style={{ height: 40, fontSize: "1.4rem" }} onClick={randomize}>
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
  );
}
