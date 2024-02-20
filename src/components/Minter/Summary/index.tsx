import AssetItem from "./AssetItem";
import Label from "./Label";

export default function Index() {
  return (
    <div
      style={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        textTransform: "uppercase",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Label assetType="BODY" /> <AssetItem assetType="BODY" />
      <Label assetType="OUTFIT" /> <AssetItem assetType="OUTFIT" />
      <Label assetType="BACKGROUND" /> <AssetItem assetType="BACKGROUND" />
      <Label assetType="HEADGEAR" /> <AssetItem assetType="HEADGEAR" />
      <Label assetType="GRIP_RIGHT" /> <AssetItem assetType="GRIP_RIGHT" />
    </div>
  );
}
