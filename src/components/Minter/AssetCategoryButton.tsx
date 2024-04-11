import { COLORS } from "@/constants/colors";
import { NFTCategory } from "@/constants/nfts";
import { CSSProperties, useCallback } from "react";
import ButtonPad from "../shared/ButtonPad";
import IconImage from "../shared/images/IconImage";

/**
 * Button for selecting
 * @param param0
 * @returns
 */
export default function AssetCategoryButton({
  asset,
  active,
  onClick,
  style,
  size,
}: {
  asset: NFTCategory;
  active?: boolean;
  onClick?: VoidFunction;
  style?: CSSProperties;
  size?: number;
}) {
  const Icon = useCallback(() => {
    let name = "";
    switch (asset) {
      case "world":
        name = "background";
        break;
      case "suitTop":
        name = "shirt";
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
