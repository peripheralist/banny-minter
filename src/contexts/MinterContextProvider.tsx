import { ASSETS } from "@/constants/assets";
import { useBodies } from "@/hooks/queries/useBodies";
import { useAnimation } from "@/hooks/useAnimation";
import { AssetType } from "@/model/assetType";
import { decodeNFTInfo } from "@/utils/tokenInfo";
import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import { MinterContext } from "./minterContext";

const { OUTFIT, BACKGROUND } = ASSETS;

export default function MinterContextProvider({ children }: PropsWithChildren) {
  const [bodyTierId, _setBodyTierId] = useState<number>(1); // tier id
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

  const setBodyTierId = useCallback(
    (tierId: number) => {
      _setBodyTierId(tierId);
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
    setBodyTierId(Math.floor(Math.random() * 4)); // TODO 4 should depend on assets length
    setOutfit(OUTFIT[Math.floor(Math.random() * OUTFIT.length)]);
    setBackground(BACKGROUND[Math.floor(Math.random() * BACKGROUND.length)]);
  }, [setBodyTierId, setOutfit, setBackground]);

  const setTab = useCallback((t: AssetType) => {
    // Store previous tab in index[1]
    _setTab(([_t]) => [t, _t]);

    setTimeout(() => {
      _setTab(([_t]) => [_t, undefined]);
    }, 250);
  }, []);

  const bodies = useBodies();

  const body = useMemo(() => {
    const uri = bodies.data?.nfttiers.find(
      (t) => t.tierId === bodyTierId
    )?.resolvedUri;

    const info = decodeNFTInfo(uri);

    if (!info) return undefined;

    return { ...info, tierId: bodyTierId };
  }, [bodyTierId, bodies]);

  return (
    <MinterContext.Provider
      value={{
        body,
        setBodyTierId,
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
