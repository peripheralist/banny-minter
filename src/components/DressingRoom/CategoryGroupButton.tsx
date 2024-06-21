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
      case "special":
        name = "sword";
        break;
      case "head":
        name = "head";
        break;
    }

    return <IconImage name={name} size={size} />;
  }, [group, size]);

  return (
    <ButtonPad
      style={{
        width: 100,
        height: "100%",
        maxHeight: 100,
        ...style,
      }}
      fillFg={active ? "#fff4de" : COLORS.bananaLite}
      onClick={onClick}
      pressed={active}
    >
      <div style={{ paddingTop: 10, paddingBottom: 10 }}>
        <Icon />
      </div>
    </ButtonPad>
  );
}
