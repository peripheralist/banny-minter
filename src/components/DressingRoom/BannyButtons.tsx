import { EquipmentContext } from "@/contexts/equipmentContext";
import { useCategorizedTiers } from "@/hooks/queries/useCategorizedTiers";
import { CSSProperties, useContext } from "react";
import ButtonPadLight from "../shared/ButtonPadLight";
import ButtonPad from "../shared/ButtonPad";
import RoundedFrame from "../shared/RoundedFrame";
import { COLORS } from "@/constants/colors";
import Fuzz from "../pixelRenderers/Fuzz";

export default function BannyButtons({
  style,
  buttonStyle,
}: {
  style?: CSSProperties;
  buttonStyle?: CSSProperties;
}) {
  const { tiers } = useCategorizedTiers();
  const {
    equipped: { naked },
    equip,
  } = useContext(EquipmentContext);

  if (!tiers?.naked) return null;

  return (
    <div style={style}>
      {tiers.naked.map((t) => {
        let color = "";
        switch (t.tierId) {
          case 1:
            color = "#1dbc00";
            break;
          case 2:
            color = "#ff5bb3";
            break;
          case 3:
            color = "#ea5608";
            break;
          case 4:
            color = "#ffc407";
            break;
        }

        const active = naked?.tierId === t.tierId;

        return (
          <ButtonPad
            key={t.tierId}
            containerStyle={{ ...buttonStyle, width: "100%" }}
            fillFg={active ? color : color}
            onClick={() => {
              equip?.naked?.(t.tierId === naked?.tierId ? undefined : t.tierId);
            }}
            shadow="sm"
            pressed={active}
          >
            <RoundedFrame
              containerStyle={{ width: 28, height: 28 }}
              background={active ? "#fff" : color}
            />
          </ButtonPad>
        );
      })}
    </div>
  );
}
