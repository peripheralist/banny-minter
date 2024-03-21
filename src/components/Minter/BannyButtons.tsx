import { MinterContext } from "@/contexts/minterContext";
import { useBodies } from "@/hooks/queries/useBodies";
import { CSSProperties, useContext } from "react";
import ButtonPadLight from "../shared/ButtonPadLight";

export default function BannyButtons({
  style,
  buttonStyle,
}: {
  style?: CSSProperties;
  buttonStyle?: CSSProperties;
}) {
  const { body, setBodyTierId } = useContext(MinterContext);

  const { data } = useBodies();

  if (!data?.nfttiers || !setBodyTierId) return null;

  return (
    <div style={style}>
      {data.nfttiers.map((t) => {
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

        return (
          <ButtonPadLight
            key={t.id}
            style={buttonStyle}
            fillFg={color}
            onClick={() => setBodyTierId(t.tierId)}
            pressed={body?.tierId === t.tierId}
            active={body?.tierId === t.tierId}
          />
        );
      })}
    </div>
  );
}
