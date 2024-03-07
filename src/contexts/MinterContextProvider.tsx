import { ASSETS } from "@/constants/assets";
import { useAnimation } from "@/hooks/useAnimation";
import { PropsWithChildren, useCallback, useState } from "react";
import { MinterContext } from "./minterContext";
import { AssetType } from "@/components/Minter/Controls";

const { BODY, OUTFIT, BACKGROUND } = ASSETS;

export default function MinterContextProvider({ children }: PropsWithChildren) {
  const [body, _setBody] = useState<number>(1); // tier id
  const [outfit, _setOutfit] = useState<string>();
  const [background, _setBackground] = useState<string>();
  const [tab, _setTab] = useState<[AssetType, AssetType | undefined]>([
    "OUTFIT",
    undefined,
  ]);

  const {
    animate: animateBody,
    frame: bodyFrame,
    setFrame: setBodyFrame,
  } = useAnimation({
    interval: 100,
    step: 0.2,
  });

  const {
    animate: animateOutfit,
    frame: outfitFrame,
    setFrame: setOutfitFrame,
  } = useAnimation({
    interval: 100,
    step: 0.2,
  });

  const {
    animate: animateBackground,
    frame: backgroundFrame,
    setFrame: setBackgroundFrame,
  } = useAnimation({
    interval: 100,
    step: 0.2,
  });

  const setBody = useCallback(
    (tierId: number) => {
      _setBody(tierId);
      animateBody(true).then(() => setBodyFrame(0));
    },
    [animateBody, setBodyFrame]
  );

  const setOutfit = useCallback(
    (s: string | undefined) => {
      _setOutfit(s);
      animateOutfit(true).then(() => setOutfitFrame(0));
    },
    [animateOutfit, setOutfitFrame]
  );

  const setBackground = useCallback(
    (s: string | undefined) => {
      _setBackground(s);
      animateBackground(true).then(() => setBackgroundFrame(0));
    },
    [animateBackground, setBackgroundFrame]
  );

  const randomize = useCallback(() => {
    setBody(Math.floor(Math.random() * 4)); // TODO 4 should depend on assets length
    setOutfit(OUTFIT[Math.floor(Math.random() * OUTFIT.length)]);
    setBackground(BACKGROUND[Math.floor(Math.random() * BACKGROUND.length)]);
  }, [setBody, setOutfit, setBackground]);

  const setTab = useCallback((t: AssetType) => {
    // Store previous tab in index[1]
    _setTab(([_t]) => [t, _t]);

    setTimeout(() => {
      _setTab(([_t]) => [_t, undefined]);
    }, 250);
  }, []);

  return (
    <MinterContext.Provider
      value={{
        body,
        setBody,
        bodyFrame,
        outfit,
        setOutfit,
        outfitFrame,
        background,
        setBackground,
        backgroundFrame,
        randomize,
        tab,
        setTab,
      }}
    >
      {children}
    </MinterContext.Provider>
  );
}
