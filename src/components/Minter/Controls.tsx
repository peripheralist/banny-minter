import { MinterContext } from "@/contexts/minterContext";
import { AssetType } from "@/model/assetType";
import { CSSProperties, useContext } from "react";
import ButtonPad from "../shared/ButtonPad";
import AssetButton from "./AssetButton";
import BannyButtons from "./BannyButtons";
import { useIsSmallScreen } from "@/hooks/useIsSmallScreen";

export const tabs: AssetType[] = [
  "OUTFIT",
  "BACKGROUND",
  "HEADGEAR",
  "GRIP_RIGHT",
];

export default function Controls({ style }: { style?: CSSProperties }) {
  const { randomize, tab, setTab } = useContext(MinterContext);

  const [activeTab] = tab;

  const isSmallScreen = useIsSmallScreen();

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
          style={isSmallScreen ? { width: 40, height: 40 } : undefined}
        />
      ))}

      <ButtonPad style={{ height: 40, fontSize: "1.4rem" }} onClick={randomize}>
        RANDOMIZE
      </ButtonPad>
    </div>
  );
}
