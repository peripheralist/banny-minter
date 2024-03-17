import { Asset } from "@/model/asset";
import { AssetType } from "@/model/assetType";
import { createContext } from "react";

export const MinterContext = createContext<{
  body?: Asset;
  setBodyTierId?: (tierId: number) => void;
  bodyFrame?: number;
  outfit?: string;
  setOutfit?: (s: string | undefined) => void;
  outfitFrame?: number;
  background?: string;
  setBackground?: (s: string | undefined) => void;
  backgroundFrame?: number;
  randomize?: VoidFunction;
  tab: [AssetType, AssetType | undefined];
  setTab?: (t: AssetType) => void;
}>({
  tab: ["OUTFIT", undefined],
});
