import { COLORS } from "@/constants/colors";
import { MinterContext } from "@/contexts/minterContext";
import { Tier } from "@/model/tier";
import { useContext, useMemo } from "react";
import FuzzMoment from "../pixelRenderers/FuzzMoment";
import ButtonPad from "../shared/ButtonPad";

export default function TierSelectorButton({
  tier,
  buttonSize,
  imageSize,
}: {
  tier: Tier;
  buttonSize: number;
  imageSize: number;
}) {
  const { equipped, equip } = useContext(MinterContext);

  const { onClick, active } = useMemo(() => {
    const { category, tierId } = tier;

    const active = equipped[category]?.tierId === tierId;

    // Equip, or unequip if already equipped
    const onClick = () => equip?.[category]?.(active ? undefined : tierId);

    return { active, onClick };
  }, [tier, equipped, equip]);

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

        <FuzzMoment
          width={buttonSize}
          height={buttonSize}
          pixelSize={4}
          fill="white"
          style={{ zIndex: 2, position: "absolute" }}
        />
      </div>
    </ButtonPad>
  );
}
