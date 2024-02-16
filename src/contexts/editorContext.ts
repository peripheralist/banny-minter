import { AssetType } from "@/components/Factory/Controls";
import { ASSETS } from "@/constants/assets";
import { Dispatch, SetStateAction, createContext } from "react";

export const EditorContext = createContext<{
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
  tab: ["BODY", undefined],
});
