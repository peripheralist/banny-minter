import { ASSETS } from "@/constants/assets";
import { Dispatch, SetStateAction, createContext } from "react";

const { BODY, OUTFIT, BACKGROUND } = ASSETS;

export const EditorContext = createContext<{
  body: string;
  setBody?: (s: string) => void;
  bodyFrame?: number;
  outfit: string;
  setOutfit?: (s: string) => void;
  outfitFrame?: number;
  background: string;
  setBackground?: (s: string) => void;
  backgroundFrame?: number;
  randomize?: VoidFunction;
}>({
  body: BODY[0],
  outfit: OUTFIT[0],
  background: BACKGROUND[0],
});
