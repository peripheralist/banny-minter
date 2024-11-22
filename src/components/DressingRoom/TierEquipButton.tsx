import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { Tier } from "@/model/tier";
import { useCallback, useContext, useMemo } from "react";
import FuzzMoment from "../pixelRenderers/FuzzMoment";
import ButtonPad from "../shared/ButtonPad";
import TierImage from "../shared/TierImage";

export default function TierEquipButton({
  tier,
  size,
}: {
  tier: Tier;
  size: number;
}) {
  const { equipped, equip } = useContext(EquipmentContext);

  const isEquipped = useMemo(
    () => equipped[tier.category]?.tierId === tier.tierId,
    [equipped, tier]
  );

  const Label = useCallback(() => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <div style={{ fontSize: FONT_SIZE.md }}>{tier.name}</div>
        <div
          style={{
            fontSize: FONT_SIZE.xs,
            color: tier.equipped ? COLORS.pink : "black",
          }}
        >
          {tier.equipped ? "DRESSED" : `${tier.ownedSupply} owned`}
        </div>
      </div>
    );
  }, [tier]);

  return (
    <ButtonPad
      fillFg={"white"}
      fillBorder={isEquipped ? COLORS.pink : "white"}
      containerStyle={{ maxWidth: size }}
      shadow="sm"
      onClick={() =>
        equip?.[tier.category](isEquipped ? undefined : tier.tierId)
      }
    >
      <div>
        <div style={{ marginBottom: 12, pointerEvents: "none" }}>
          <FuzzMoment
            width={size - 16}
            height={size - 16}
            fill={"white"}
            style={{ zIndex: 2, position: "absolute", margin: 8 }}
          />
          <TierImage tier={tier} size={size - 36} />
        </div>

        <Label />
      </div>
    </ButtonPad>
  );
}
