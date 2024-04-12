import { COLORS } from "@/constants/colors";
import { MinterContext } from "@/contexts/minterContext";
import { useAnimation } from "@/hooks/useAnimation";
import Image from "next/image";
import { useContext, useEffect, useMemo } from "react";
import Fuzz from "../pixelRenderers/Fuzz";
import ButtonPad from "../shared/ButtonPad";
import { Tier } from "@/model/tier";

export default function TierSelectorButton({
  tier,
  buttonSize,
  imageSize,
}: {
  tier: Tier;
  buttonSize: number;
  imageSize: number;
}) {
  const {
    equipped: { get, set },
  } = useContext(MinterContext);

  const { animate, frame } = useAnimation({ step: 0.125 });

  useEffect(() => {
    // intro animation
    animate(true);
  }, [animate]);

  const { onClick, active } = useMemo(() => {
    const { category, tierId } = tier;

    const active = get[category]?.tierId === tierId;

    // Equip, or unequip if already equipped
    const onClick = () => set?.[category]?.(active ? undefined : tierId);

    return { active, onClick };
  }, [tier, get, set]);

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
        {tier.image && (
          <object
            style={{ position: "absolute", inset: 0 }}
            width={imageSize}
            height={imageSize}
            data={tier.image}
            type="image/svg+xml"
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
