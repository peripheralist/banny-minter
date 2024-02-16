import { useMemo } from "react";
import AssetButton from "./AssetButton";
import { AssetType } from "./Drawer";

export default function Buttons({
  tabs,
  activeTab,
  onSelectTab,
}: {
  tabs: AssetType[];
  activeTab: AssetType;
  onSelectTab: (t: AssetType) => void;
}) {
  const _Buttons = useMemo(
    () =>
      tabs.map((t) => (
        <AssetButton
          key={t}
          asset={t}
          active={activeTab === t}
          onClick={activeTab === t ? undefined : () => onSelectTab(t)}
        />
      )),
    [activeTab, onSelectTab, tabs]
  );

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {_Buttons}
      </div>
    </div>
  );
}
