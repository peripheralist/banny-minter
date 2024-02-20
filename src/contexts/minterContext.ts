import { AssetType } from "@/components/Minter/Controls";
import { createContext } from "react";

export const MinterContext = createContext<{
  body?: string;
  setBody?: (s: string) => void;
  bodyFrame?: number;
  outfit?: string;
  setOutfit?: (s: string) => void;
  outfitFrame?: number;
  background?: string;
  setBackground?: (s: string) => void;
  backgroundFrame?: number;
  randomize?: VoidFunction;
  tab: [AssetType, AssetType | undefined];
  setTab?: (t: AssetType) => void;
}>({
  tab: ["OUTFIT", undefined],
});
