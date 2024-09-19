import { COLORS } from "@/constants/colors";
import { CATEGORY_GROUP_NAMES, CategoryGroup } from "@/constants/category";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { useMeasuredRef } from "@/hooks/useMeasuredRef";
import {
  CSSProperties,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import RoundedFrame from "../../shared/RoundedFrame";
import CategoryGroupGrid from "./CategoryGroupGrid";
import CategoryGroupButton from "../CategoryGroupButton";

const BUTTONS_HEIGHT = 40;

/**
 * Renders a paged grid of all tiers within a category group, that can be equipped or unequipped by clicking..
 * @param gridCols Number of grid columns
 * @param gridRows Number of grid rows
 * @param imageSize Base size of tier asset images in grid. May be scaled up based on tier category.
 * @param style CSS Style
 */
export default function TiersScrollGrid({
  categories,
  gridCols,
  imageSize,
  containerStyle,
  style,
}: {
  categories: CategoryGroup[];
  gridCols: number;
  imageSize: number;
  containerStyle?: CSSProperties;
  style?: CSSProperties;
}) {
  const [scrollListenerActive, setScrollListenerActive] = useState(false);
  const { measuredRef, node, height } = useMeasuredRef();
  const { selectedGroup, setSelectedGroup } = useContext(EquipmentContext);

  useEffect(() => {
    setScrollListenerActive(false);

    node
      ?.querySelector(`#${selectedGroup}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

    const timeout = setTimeout(() => {
      setScrollListenerActive(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [node, selectedGroup]);

  const onScroll = useCallback(() => {
    if (!scrollListenerActive || !setSelectedGroup) return;

    function getMiddle(n: CategoryGroup) {
      const rect = node?.querySelector(`#${n}`)?.getBoundingClientRect();

      return rect ? Math.max(rect.top + rect.height / 2, 0) : 0;
    }

    const nearest = categories
      .filter((c) => !!getMiddle(c))
      .toSorted((a, b) => (getMiddle(a) < getMiddle(b) ? -1 : 1));
    setSelectedGroup(nearest[0]);
  }, [categories, scrollListenerActive, setSelectedGroup, node]);

  const maxContentHeight = useMemo(() => height - 12, [height]);

  return (
    <div ref={measuredRef} style={{ maxHeight: "100%" }}>
      <RoundedFrame
        containerStyle={{
          height: "100%",
          boxSizing: "border-box",
          ...containerStyle,
        }}
        style={{
          overflow: "hidden",
          marginTop: 12,
          paddingTop: 0,
          maxHeight: maxContentHeight,
        }}
        shadow
        background={COLORS.bananaHint}
      >
        <div
          onScroll={onScroll}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            justifyContent: "space-between",
            position: "relative",
            boxSizing: "border-box",
            overflow: "auto",
            maxHeight: maxContentHeight - BUTTONS_HEIGHT,
            paddingBottom: `calc(100% - 40px)`,
            ...style,
          }}
        >
          {categories.map((g) => (
            <CategoryGroupGrid
              key={g}
              group={g}
              imageSize={imageSize}
              gridCols={gridCols}
            />
          ))}
        </div>
      </RoundedFrame>
    </div>
  );
}
