import { MinterContext } from "@/contexts/minterContext";
import { useBodies } from "@/hooks/queries/useBodies";
import { useContext } from "react";
import ButtonPad from "../shared/ButtonPad";
import ButtonPadLight from "../shared/ButtonPadLight";

export default function BannyButtons() {
  const { body, setBodyTierId } = useContext(MinterContext);

  const { data } = useBodies();

  if (!data?.nfttiers || !setBodyTierId) return null;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 8,
      }}
    >
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
            style={{ height: 40, width: 40 }}
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
