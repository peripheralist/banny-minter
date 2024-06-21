import { COLORS } from "@/constants/colors";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { Tier } from "@/model/tier";
import { useCallback, useContext, useMemo } from "react";
import FuzzMoment from "../pixelRenderers/FuzzMoment";
import ButtonPad from "../shared/ButtonPad";

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

  const TierImage = useCallback(() => {
    if (!tier.image) return null;

    switch (tier.category) {
      case "glasses":
      case "headTop":
      case "mouth":
      case "head":
        return (
          <object
            style={{
              position: "absolute",
              top: "-16%",
              left: "-35%",
            }}
            width={buttonSize * 2}
            height={buttonSize * 2}
            data={tier.image}
            type="image/svg+xml"
          />
        );
      case "legs":
      case "suitBottom":
        return (
          <object
            style={{
              position: "absolute",
              top: "-110%",
              left: "-60%",
              bottom: 0,
            }}
            width={buttonSize * 2.25}
            height={buttonSize * 2.25}
            data={tier.image}
            type="image/svg+xml"
          />
        );
      case "suitTop":
        return (
          <object
            style={{
              position: "absolute",
              top: "-64%",
              left: "-30%",
              bottom: 0,
            }}
            width={buttonSize * 1.8}
            height={buttonSize * 1.8}
            data={tier.image}
            type="image/svg+xml"
          />
        );
      case "necklace":
        return (
          <object
            style={{
              position: "absolute",
              top: "-70%",
              left: "-45%",
              bottom: 0,
            }}
            width={buttonSize * 2.4}
            height={buttonSize * 2.25}
            data={tier.image}
            type="image/svg+xml"
          />
        );
      default:
        return (
          <object
            style={{ position: "absolute", top: "-10%", left: "-4%" }}
            width={buttonSize * 1.2}
            height={buttonSize * 1.2}
            data={tier.image}
            type="image/svg+xml"
          />
        );
    }
  }, [tier, buttonSize]);

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
          <TierImage />

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
