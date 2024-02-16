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
        gap: 10,
        minWidth: 280,
      }}
    >
      <Label assetType="BODY" /> <AssetItem assetType="BODY" />
      <Label assetType="OUTFIT" /> <AssetItem assetType="OUTFIT" />
      <Label assetType="BACKGROUND" /> <AssetItem assetType="BACKGROUND" />
    </div>
  );
}
