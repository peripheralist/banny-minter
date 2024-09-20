import { CategoryGroup } from "@/constants/category";
import { COLORS } from "@/constants/colors";
import { EquipmentContext } from "@/contexts/equipmentContext";
import {
  CSSProperties,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import RoundedFrame from "../../shared/RoundedFrame";
import CategoryGroupGrid from "./CategoryGroupGrid";

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
  const ref = useRef<HTMLDivElement>(null);
  const { selectedGroup, setSelectedGroup } = useContext(EquipmentContext);

  useEffect(() => {
    setScrollListenerActive(false);

    ref.current
      ?.querySelector(`#${selectedGroup}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

    const timeout = setTimeout(() => {
      setScrollListenerActive(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [selectedGroup]);

  const onScroll = useCallback(() => {
    if (!scrollListenerActive || !setSelectedGroup) return;

    function getHeaderTop(c: CategoryGroup) {
      const rect = ref.current
        ?.querySelector(`#h-${c}`)
        ?.getBoundingClientRect();

      return rect ? rect.top : -1;
    }

    const top = categories
      .filter((c) => getHeaderTop(c) > 0)
      .sort((a, b) => (a < b ? -1 : 1))[0];

    setSelectedGroup(top);
  }, [categories, scrollListenerActive, setSelectedGroup]);

  return (
    <div ref={ref} style={{ maxHeight: "100%" }}>
      <RoundedFrame
        containerStyle={{
          ...containerStyle,
        }}
        style={{
          maxHeight: "100%",
          overflow: "hidden",
          marginTop: 12,
          paddingTop: 0,
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
            overflow: "auto",
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
