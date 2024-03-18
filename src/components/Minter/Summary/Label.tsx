import { COLORS } from "@/constants/colors";
import { AssetType } from "@/model/assetType";

export default function Label({ assetType }: { assetType: AssetType }) {
  return (
    <div style={{ fontWeight: "bold", color: COLORS.banana }}>{assetType}:</div>
  );
}
