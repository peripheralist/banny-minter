import {
  CATEGORY_GROUPS,
  CATEGORY_GROUP_NAMES,
  Category,
  CategoryGroup,
} from "@/constants/category";
import { COLORS } from "@/constants/colors";
import { useWindowSize } from "@/hooks/useWindowSize";
import { CSSProperties, useMemo } from "react";
import RoundedFrame from "./RoundedFrame";

export function CategoryGroupGrid<I extends { category: Category }>({
  items,
  render,
  label,
  emptyText,
  gridStyle,
}: {
  items: I[] | undefined;
  render: (i: I) => JSX.Element;
  label?: boolean;
  emptyText?: string;
  gridStyle?: CSSProperties;
}) {
  const { isSmallScreen } = useWindowSize();

  const groupedItems = useMemo(() => {
    if (!items) return;

    return Object.entries(CATEGORY_GROUPS).reduce(
      (acc, [group, categories]) => ({
        ...acc,
        [group]: categories.flatMap((c) =>
          items.filter((i) => i.category === c)
        ),
      }),
      {} as Record<CategoryGroup, I[]>
    );
  }, [items]);

  if (!groupedItems) return null;

  return CATEGORY_GROUP_NAMES.map((g) => {
    const itemsOfGroup = groupedItems[g];

    return (
      <div key={g}>
        {label && (
          <div
            style={{
              position: "sticky",
              top: isSmallScreen ? 48 : 0,
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
