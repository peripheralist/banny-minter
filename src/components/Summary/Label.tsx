import React from "react";
import { AssetType } from "../Factory/Controls";

export default function Label({ assetType }: { assetType: AssetType }) {
  return <div style={{ fontWeight: "bold" }}>{assetType}:</div>;
}
