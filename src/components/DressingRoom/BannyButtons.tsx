import { EquipmentContext } from "@/contexts/equipmentContext";
import { useCategorizedTiers } from "@/hooks/queries/useCategorizedTiers";
import { CSSProperties, useContext } from "react";
import ButtonPadLight from "../shared/ButtonPadLight";

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
          <ButtonPadLight
            key={t.tierId}
            style={buttonStyle}
            fillFg={color}
            onClick={() => equip?.naked?.(t.tierId)}
            pressed={active}
            active={active}
          />
        );
      })}
    </div>
  );
}
