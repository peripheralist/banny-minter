import { COLORS } from "@/constants/colors";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { Tier } from "@/model/tier";
import { useCallback, useContext, useMemo } from "react";
import FuzzMoment from "../pixelRenderers/FuzzMoment";
import ButtonPad from "../shared/ButtonPad";
import TierImage from "../shared/TierImage";

export default function TierSelectorButton({
  tier,
  buttonSize,
}: {
  tier: Tier;
  buttonSize: number;
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
            fontSize: "0.875rem",
            fontWeight: "bold",
          }}
        >
          SOLD OUT
        </div>
      );
    } else {
      return (
        <div
          style={{
            fontSize: "0.875rem",
          }}
        >
          <span style={{ fontWeight: "bold" }}>
            {tier.remainingSupply.toString()}
          </span>
          <span>/{tier.initialSupply.toString()} left</span>
        </div>
      );
    }
  }, [isSoldOut, tier.initialSupply, tier.remainingSupply]);

  return (
    <div style={{ position: "relative" }}>
      <ButtonPad
        style={{ marginBottom: 20 }}
        fillFg="white"
        onClick={onClick}
        pressed={active}
      >
        <div
          style={{
            position: "relative",
            width: buttonSize,
            height: buttonSize,
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <TierImage tier={tier} size={buttonSize} />

          <div
            style={{
              position: "absolute",
              inset: 0,
              border: "4px solid",
              borderColor: active ? COLORS.pink : "white",
              background: isSoldOut ? "#ffffff88" : "transparent",
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

      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: buttonSize + 12,
          textAlign: "center",
        }}
      >
        <RemainingSupply />
      </div>
    </div>
  );
}
