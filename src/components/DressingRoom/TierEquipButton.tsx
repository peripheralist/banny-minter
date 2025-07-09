import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { DressBannyContext } from "@/contexts/dressBannyContext";
import { TierOrNft } from "@/model/tierOrNft";
import { CSSProperties, useCallback, useContext, useMemo } from "react";
import FuzzMoment from "../pixelRenderers/FuzzMoment";
import ButtonPad from "../shared/ButtonPad";
import TierImage from "../shared/TierImage";

export default function TierEquipButton({
  tier,
  size,
  labelStyle,
}: {
  tier: Pick<
    TierOrNft,
    "category" | "tierId" | "ownedQuantity" | "dressed" | "metadata"
  >;
  size: number;
  labelStyle?: CSSProperties;
}) {
  const { equipped, equip } = useContext(DressBannyContext);

  const isEquipped = useMemo(
    () => equipped[tier.category]?.tierId === tier.tierId,
    [equipped, tier]
  );

  const Label = useCallback(() => {
    let label = `${tier.ownedQuantity} owned`;

    if (tier.dressed) {
      label = isEquipped ? "DRESSED" : "UNDRESS";
    }

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          padding: 16,
          fontSize: FONT_SIZE.md,
          ...labelStyle,
        }}
      >
        <div>{tier.metadata?.productName}</div>
        <div
          style={{
            fontSize: FONT_SIZE.xs,
            color: tier?.dressed ? COLORS.pink : "black",
          }}
        >
          {label}
        </div>
      </div>
    );
  }, [tier, labelStyle, isEquipped]);

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
        <div style={{ pointerEvents: "none" }}>
          <FuzzMoment
            width={size - 16}
            height={size - 16}
            fill={"white"}
            style={{ zIndex: 2, position: "absolute", margin: 8 }}
          />
          <TierImage tier={tier} size={size} />
        </div>

        <Label />
      </div>
    </ButtonPad>
  );
}
