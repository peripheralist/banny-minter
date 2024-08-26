import { COLORS } from "@/constants/colors";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { Tier } from "@/model/tier";
import { useContext, useMemo } from "react";
import Fuzz from "../pixelRenderers/Fuzz";
import FuzzMoment from "../pixelRenderers/FuzzMoment";
import ButtonPad from "../shared/ButtonPad";
import TierImage from "../shared/TierImage";
import { FONT_SIZE } from "@/constants/fontSize";

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

  // Only use sold out treatment if tier is not a NFT
  const isSoldOut = useMemo(
    () => tier.remainingSupply <= BigInt(0) && !tier.tokenId,
    [tier.remainingSupply, tier.tokenId]
  );

  return (
    <div style={{ position: "relative" }}>
      <ButtonPad
        fillFg={active ? COLORS.pinkLite : "white"}
        fillBorder={active ? COLORS.pink : "black"}
        onClick={onClick}
        pressed={active}
        style={{ opacity: isSoldOut ? 0.7 : 1 }}
        shadow="sm"
      >
        <div
          style={{
            position: "relative",
            width: buttonSize,
            height: buttonSize,
            borderRadius: 2,
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {tier ? (
            <TierImage tier={tier} size={buttonSize - 16} />
          ) : (
            <Fuzz width={buttonSize} height={buttonSize} />
          )}

          <div
            style={{
              position: "absolute",
              inset: 0,
            }}
          />

          {tier.label && (
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                textAlign: "center",
                fontSize: FONT_SIZE.xs,
                zIndex: 1,
              }}
            >
              {tier.label}
            </div>
          )}

          <FuzzMoment
            width={buttonSize - 8}
            height={buttonSize - 8}
            fill={"white"}
            style={{ zIndex: 2, position: "absolute" }}
          />
        </div>
      </ButtonPad>
    </div>
  );
}
