import { COLORS } from "@/constants/colors";
import { CATEGORY_GROUPS, CategoryGroup } from "@/constants/nfts";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { useCallback, useContext, useMemo } from "react";
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

    return (
      <IconImage
        style={{
          // background: active ? COLORS.pink : "black",
          background: "black",
        }}
        name={name}
        size={size}
      />
    );
  }, [group, size, active]);

  return (
    <>
      <div style={{ position: "relative" }}>
        <ButtonPad
          fillFg={active ? "white" : COLORS.bananaHint}
          // fillBg={active ? COLORS.pinkLite : undefined}
          // fillBorder={active ? COLORS.pink : undefined}
          onClick={onClick}
          style={{ width: 100, height: 100, opacity: active ? 1 : 1 }}
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

        {/* {active && (
          <RoundedFrame
            background={COLORS.pinkLite}
            borderColor={COLORS.pinkLite}
            containerStyle={{
              position: "absolute",
              zIndex: -1,
              top: 0,
              left: -4,
              right: -4,
              height: 108,
            }}
          />
        )} */}
      </div>
    </>
  );
}
