import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import { EditorContext } from "./editorContext";
import { ASSETS } from "@/constants/assets";

const { BODY, OUTFIT, BACKGROUND } = ASSETS;

export default function EditorContextProvider({ children }: PropsWithChildren) {
  const [body, setBody] = useState<string>(BODY[0]);
  const [outfit, setOutfit] = useState<string>(OUTFIT[0]);
  const [background, setBackground] = useState<string>(BACKGROUND[0]);

  const randomize = useCallback(() => {
    setBody(BODY[Math.floor(Math.random() * BODY.length)]);
    setOutfit(OUTFIT[Math.floor(Math.random() * OUTFIT.length)]);
    setBackground(BACKGROUND[Math.floor(Math.random() * BACKGROUND.length)]);
  }, []);

  useEffect(() => {
    randomize();
  }, [randomize]);

  return (
    <EditorContext.Provider
      value={{
        body,
        setBody,
        outfit,
        setOutfit,
        background,
        setBackground,
        randomize,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
}
