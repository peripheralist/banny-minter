import { COLORS } from "@/constants/colors";
import { MinterContext } from "@/contexts/minterContext";
import { useAnimation } from "@/hooks/useAnimation";
import { Asset } from "@/model/asset";
import Image from "next/image";
import { useContext, useEffect, useMemo } from "react";
import Fuzz from "../pixelRenderers/Fuzz";
import ButtonPad from "../shared/ButtonPad";

export default function AssetOptionButton({
  asset,
  buttonSize,
  assetSize,
}: {
  asset: Asset;
  buttonSize: number;
  assetSize: number;
}) {
  const {
    selectedCategory,
    equipped: { get, set },
  } = useContext(MinterContext);

  const { animate, frame } = useAnimation({ step: 0.125 });

  useEffect(() => {
    // intro animation
    animate(true);
  }, [animate]);

  const { onClick, active } = useMemo(() => {
    switch (selectedCategory) {
      case "head":
        return {
          active: get.head?.tierId === asset.tierId,
          onClick: () => set?.head?.(asset.tierId),
        };
      case "suitTop":
        return {
          active: get.suitTop?.tierId === asset.tierId,
          onClick: () => set?.suitTop?.(asset.tierId),
        };
    }

    return { active: undefined, onClick: undefined };
  }, [asset, selectedCategory, get, set]);

  return (
    <ButtonPad fillFg="white" onClick={onClick} pressed={active}>
      <div
        style={{
          position: "relative",
          width: buttonSize,
          height: buttonSize,
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        {asset.image && (
          <Image
            style={{ position: "absolute", inset: 0 }}
            width={assetSize}
            height={assetSize}
            src={asset.image}
            alt={asset.name ?? asset.tierId.toString()}
          />
        )}

        <div
          style={{
            position: "absolute",
            inset: 0,
            border: "4px solid",
            borderColor: active ? COLORS.pink : "white",
          }}
        />

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
