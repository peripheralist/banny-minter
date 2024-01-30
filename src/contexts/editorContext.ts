import { ASSETS } from "@/constants/assets";
import { Dispatch, SetStateAction, createContext } from "react";

const { BODY, OUTFIT, BACKGROUND } = ASSETS;

export const EditorContext = createContext<{
  body: string;
  setBody?: Dispatch<SetStateAction<string>>;
  outfit: string;
  setOutfit?: Dispatch<SetStateAction<string>>;
  background: string;
  setBackground?: Dispatch<SetStateAction<string>>;
  randomize?: VoidFunction;
}>({
  body: BODY[0],
  outfit: OUTFIT[0],
  background: BACKGROUND[0],
});
