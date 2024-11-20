import { CATEGORY_GROUP_NAMES, CategoryGroup } from "@/constants/category";
import { COLORS } from "@/constants/colors";
import { useWindowSize } from "@/hooks/useWindowSize";
import { CSSProperties } from "react";
import RoundedFrame from "./RoundedFrame";

export function CategoryGroupGrid<I>({
  items,
  render,
  label,
  emptyText,
  gridStyle,
}: {
  items: Record<CategoryGroup, I[]> | undefined;
  render: (i: I) => JSX.Element;
  label?: boolean;
  emptyText?: string;
  gridStyle?: CSSProperties;
}) {
  const { isSmallScreen } = useWindowSize();

  if (!items) return null;

  return CATEGORY_GROUP_NAMES.map((g) => {
    const itemsOfGroup = items[g];

    return (
      <div key={g}>
        {label && (
          <div
            style={{
              position: "sticky",
              top: isSmallScreen ? 8 : 0,
              textTransform: "uppercase",
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
                {g}
              </RoundedFrame>
            </div>
          </div>
        )}

        {itemsOfGroup.length ? (
          <div
            style={{
              display: "grid",
              paddingTop: isSmallScreen ? 56 : 0,
              ...gridStyle,
              // gridTemplateColumns: `repeat(auto-fit, ${imgSize}px)`,
              // gap: gap ?? 16,
            }}
          >
            {itemsOfGroup.map(render)}
          </div>
        ) : (
          <div style={{ columnSpan: "all", padding: 12 }}>
            {emptyText ?? "None"}
          </div>
        )}
      </div>
    );
  });
}
