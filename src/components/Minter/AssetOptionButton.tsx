import { COLORS } from "@/constants/colors";
import { MinterContext } from "@/contexts/minterContext";
import { useAnimation } from "@/hooks/useAnimation";
import Image from "next/image";
import { useContext, useEffect, useMemo } from "react";
import Fuzz from "../pixelRenderers/Fuzz";
import ButtonPad from "../shared/ButtonPad";
import CheckBadgeIcon from "../shared/images/CheckBadgeIcon";
import { AssetType } from "./Controls";

export default function AssetOptionButton({
  asset,
  assetType,
  buttonSize,
  assetSize,
}: {
  asset: string;
  assetType: AssetType;
  buttonSize: number;
  assetSize: number;
}) {
  const { outfit, background, setOutfit, setBackground, tab } =
    useContext(MinterContext);

  const { animate, frame } = useAnimation({ step: 0.125 });

  useEffect(() => {
    // intro animation
    animate(true);
  }, [animate]);

  const { onClick, active } = useMemo(() => {
    switch (assetType) {
      case "BACKGROUND":
        return {
          active: background === asset,
          onClick: () => setBackground?.(asset),
        };
      case "OUTFIT":
        return { active: outfit === asset, onClick: () => setOutfit?.(asset) };
    }

    return { active: undefined, onClick: undefined };
  }, [asset, assetType, setOutfit, setBackground, background, outfit]);

  return (
    <ButtonPad fillFg="white" onClick={onClick}>
      <div
        style={{
          position: "relative",
          width: buttonSize,
          height: buttonSize,
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        <Image
          style={{ position: "absolute", inset: 0 }}
          width={assetSize}
          height={assetSize}
          src={`/assets/banny/${assetType.toLowerCase()}/${asset}`}
          alt={asset}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            border: "4px solid",
            borderColor: active ? COLORS.pink : "white",
          }}
        />

        {/* {active && (
          <CheckBadgeIcon
            style={{
              position: "absolute",
              bottom: 4,
              left: 4,
              zIndex: 1,
            }}
          />
        )} */}

        {frame && frame < 1 && (
          <Fuzz
            width={buttonSize}
            height={buttonSize}
            pixelSize={4}
            fill="white"
            style={{ zIndex: 2, position: "absolute" }}
            density={1 - frame}
          />
        )}
      </div>
    </ButtonPad>
  );
}
