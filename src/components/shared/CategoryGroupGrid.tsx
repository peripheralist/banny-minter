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
  excludeGroups,
}: {
  items: I[] | undefined;
  render: (i: I) => JSX.Element;
  label?: boolean;
  emptyText?: string;
  gridStyle?: CSSProperties;
  excludeGroups?: CategoryGroup[];
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

  return CATEGORY_GROUP_NAMES.filter((g) => !excludeGroups?.includes(g)).map(
    (g) => {
      const itemsOfGroup = groupedItems[g];

      return (
        <div key={g}>
          {label && (
            <div
              style={{
                position: "sticky",
                top: isSmallScreen ? 16 : 0,
                textTransform: "uppercase",
                zIndex: isSmallScreen ? 2 : undefined,
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
                        left: -144,
                      }),
                }}
              >
                <RoundedFrame
                  background={
                    isSmallScreen ? COLORS.banana100 : COLORS.banana50
                  }
                  style={{
                    padding: isSmallScreen ? "8px 16px 8px 20px" : "12px 16px",
                    color: "black",
                    borderLeft: "2px solid black",
                  }}
                >
                  {g}
                </RoundedFrame>

                <div
                  hidden={isSmallScreen}
                  style={{
                    background: "black",
                    position: "absolute",
                    left: 8,
                    top: 0,
                    bottom: 0,
                    width: 4,
                  }}
                />
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
            <div
              style={{
                columnSpan: "all",
                padding: 12,
                paddingTop: isSmallScreen ? 56 : 12,
                minWidth: 120,
              }}
            >
              {emptyText ?? "None"}
            </div>
          )}
        </div>
      );
    }
  );
}
