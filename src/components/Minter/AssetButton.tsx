import { COLORS } from "@/constants/colors";
import { AssetType } from "@/model/assetType";
import { CSSProperties, useCallback } from "react";
import ButtonPad from "../shared/ButtonPad";
import IconImage from "../shared/images/IconImage";

export default function AssetButton({
  asset,
  active,
  onClick,
  style,
  size,
}: {
  asset: AssetType;
  active?: boolean;
  onClick?: VoidFunction;
  style?: CSSProperties;
  size?: number;
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

    return <IconImage name={name} size={size} />;
  }, [asset, size]);

  return (
    <ButtonPad
      style={{ width: 100, height: "100%", maxHeight: 100, ...style }}
      fillFg={active ? "#ffeecd" : COLORS.banana}
      onClick={onClick}
      pressed={active}
    >
      <Icon />
    </ButtonPad>
  );
}
