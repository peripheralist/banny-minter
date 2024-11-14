import { CATEGORY_GROUPS, CategoryGroup } from "@/constants/category";
import { ShopContext } from "@/contexts/shopContext";
import { Tier, Tiers } from "@/model/tier";
import { useContext, useMemo } from "react";
import RoundedFrame from "./RoundedFrame";
import { COLORS } from "@/constants/colors";
import { useWindowSize } from "@/hooks/useWindowSize";

export function CategoryGroupGrid2({
  tiers,
  button,
  label,
  group,
  imgSize,
}: {
  tiers: Tiers;
  button: (t: Tier) => JSX.Element;
  label?: boolean;
  group: CategoryGroup;
  imgSize: number;
}) {
  const { isSmallScreen } = useWindowSize();

  const groupCategories = useMemo(() => CATEGORY_GROUPS[group], [group]);

  const tiersOfGroup = useMemo(() => {
    if (!tiers) return [];

    return groupCategories.reduce(
      (acc, cat) => [...acc, ...tiers[cat]],
      [] as Tier[]
    );
  }, [tiers, groupCategories]);

  return (
    <div>
      {label && (
        <div
          style={{
            position: "sticky",
            top: 0,
            textTransform: "uppercase",
            margin: 0,
            zIndex: 2,
          }}
        >
          <div
            style={{
              position: "absolute",
              ...(isSmallScreen
                ? {
                    left: -20,
                    // right: -12,
                    top: 0,
                  }
                : {
                    left: -128,
                  }),
            }}
          >
            <RoundedFrame
              background={"black"}
              style={{
                padding: "12px 16px",
                height: 40,
                color: COLORS.bananaLite,
              }}
            >
              {group}
            </RoundedFrame>
          </div>
        </div>
      )}

      {tiersOfGroup.length ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(auto-fit, ${imgSize}px)`,
            gap: 16,
          }}
        >
          {tiersOfGroup.map(button)}
        </div>
      ) : (
        <div style={{ columnSpan: "all" }}>None</div>
      )}
    </div>
  );
}
