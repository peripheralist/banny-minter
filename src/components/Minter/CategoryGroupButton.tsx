import { COLORS } from "@/constants/colors";
import { Category, CategoryGroup } from "@/constants/nfts";
import { CSSProperties, useCallback } from "react";
import ButtonPad from "../shared/ButtonPad";
import IconImage from "../shared/images/IconImage";

/**
 * Button for selecting
 * @param param0
 * @returns
 */
export default function CategoryGroupButton({
  group,
  active,
  onClick,
  style,
  size,
}: {
  group: CategoryGroup;
  active?: boolean;
  onClick?: VoidFunction;
  style?: CSSProperties;
  size?: number;
}) {
  const Icon = useCallback(() => {
    let name = "";
    switch (group) {
      case "world":
        name = "background";
        break;
      case "body":
        name = "shirt";
        break;
    }

    return <IconImage name={name} size={size} />;
  }, [group, size]);

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
