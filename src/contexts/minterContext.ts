import { AssetType } from "@/components/Minter/Controls";
import { createContext } from "react";

export const MinterContext = createContext<{
  body?: number;
  setBody?: (tierId: number) => void;
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
