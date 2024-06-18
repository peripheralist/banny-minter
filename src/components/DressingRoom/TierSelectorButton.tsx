import { COLORS } from "@/constants/colors";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { Tier } from "@/model/tier";
import { useCallback, useContext, useMemo } from "react";
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
  const { equipped, equip } = useContext(EquipmentContext);

  const { onClick, active } = useMemo(() => {
    const { category, tierId } = tier;

    const active = equipped[category]?.tierId === tierId;

    // Equip, or unequip if already equipped
    const onClick = () => equip?.[category]?.(active ? undefined : tierId);

    return { active, onClick };
  }, [tier, equipped, equip]);

  const isSoldOut = useMemo(
    () => tier.remainingSupply <= BigInt(0),
    [tier.remainingSupply]
  );

  const RemainingSupply = useCallback(() => {
    if (isSoldOut) {
      return (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "1.65rem",
          }}
        >
          SOLD OUT
        </div>
      );
    } else {
      return (
        <div
          style={{
            position: "absolute",
            bottom: 2,
            left: 0,
            right: 0,
            textAlign: "center",
            fontSize: "0.875rem",
          }}
        >
          <span style={{ fontWeight: 900 }}>
            {tier.remainingSupply.toString()}
          </span>
          <span style={{ opacity: 0.5 }}>/{tier.initialSupply.toString()}</span>
        </div>
      );
    }
  }, [isSoldOut, tier.initialSupply, tier.remainingSupply]);

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
            style={{
              position: "absolute",
              bottom: 5,
              objectFit: "fill",
              objectPosition: "50% top",
            }}
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
            background: isSoldOut ? "#ffffff88" : "transparent",
          }}
        />

        <RemainingSupply />

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
