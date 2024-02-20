import React from "react";
import { AssetType } from "../Controls";
import { COLORS } from "@/constants/colors";

export default function Label({ assetType }: { assetType: AssetType }) {
  return (
    <div style={{ fontWeight: "bold", color: COLORS.banana }}>{assetType}:</div>
  );
}
