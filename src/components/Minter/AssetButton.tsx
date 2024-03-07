import { COLORS } from "@/constants/colors";
import { useCallback } from "react";
import ButtonPadLight from "../shared/ButtonPadLight";
import IconImage from "../shared/images/IconImage";
import { AssetType } from "./Controls";

export default function AssetButton({
  asset,
  active,
  onClick,
}: {
  asset: AssetType;
  active?: boolean;
  onClick?: VoidFunction;
}) {
  const Icon = useCallback(() => {
    let name = "";
    switch (asset) {
      case "BACKGROUND":
        name = "background";
        break;
      case "HEADGEAR":
        name = "hat";
        break;
      case "OUTFIT":
        name = "shirt";
        break;
      case "GRIP_RIGHT":
        name = "sword";
        break;
    }

    return <IconImage name={name} />;
  }, [asset]);

  return (
    <ButtonPadLight
      style={{ width: 100, height: "100%", maxHeight: 100 }}
      fillFg={COLORS.banana}
      onClick={onClick}
      active={active}
      pressed={active}
    >
      <Icon />
    </ButtonPadLight>
  );
}
