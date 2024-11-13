import { COLORS } from "@/constants/colors";
import { CATEGORY_GROUPS, CategoryGroup } from "@/constants/category";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { useCallback, useContext, useMemo } from "react";
import ButtonPad from "../shared/ButtonPad";
import IconImage from "../shared/images/IconImage";
import { FONT_SIZE } from "@/constants/fontSize";
import Light from "../shared/Light";
import RoundedFrame from "../shared/RoundedFrame";

/**
 * Button for selecting
 * @param param0
 * @returns
 */
export default function CategoryGroupButton({
  group,
  active,
  onClick,
  size,
}: {
  group: CategoryGroup;
  active?: boolean;
  onClick?: VoidFunction;
  size?: number;
}) {
  const { equipped } = useContext(EquipmentContext);

  const equippedCount = useMemo(
    () => CATEGORY_GROUPS[group].filter((c) => !!equipped[c]).length,
    [equipped, group]
  );

  const Icon = useCallback(() => {
    let name = "";
    switch (group) {
      case "banny":
        name = "naked";
        break;
      case "world":
        name = "background";
        break;
      case "outfit":
        name = "shirt";
        break;
      case "special":
        name = "sword";
        break;
      case "head":
        name = "head";
        break;
    }

    return (
      <IconImage
        style={{ background: active ? COLORS.pink : "black" }}
        name={name}
        size={size}
      />
    );
  }, [group, size, active]);

  return (
    <ButtonPad
      fillFg={active ? COLORS.pinkLite : "white"}
      onClick={onClick}
      style={{ height: 60, opacity: active ? 1 : 1 }}
      containerStyle={{ width: "100%" }}
      pressed={active}
    >
      <Icon />
      {equippedCount > 0 && (
        <div
          style={{
            position: "absolute",
            right: 12,
            bottom: 12,
            color: COLORS.pink,
          }}
        >
          {equippedCount}
        </div>
      )}
    </ButtonPad>
  );
}
