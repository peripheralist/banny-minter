import TierShopButton from "@/components/DressingRoom/TierShopButton";
import ToolbarBagView from "@/components/ToolbarBagView";
import RoundedFrame from "@/components/shared/RoundedFrame";
import {
  CATEGORY_GROUPS,
  CATEGORY_GROUP_NAMES,
  CategoryGroup,
} from "@/constants/category";
import { COLORS } from "@/constants/colors";
import { DROPS } from "@/constants/drops";
import { FONT_SIZE } from "@/constants/fontSize";
import { ShopContext } from "@/contexts/shopContext";
import { useIsSmallScreen } from "@/hooks/useIsSmallScreen";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Tier } from "@/model/tier";
import { useRouter } from "next/router";
import { useContext, useMemo } from "react";

function CategoryGroupGrid({
  group,
  imgSize,
}: {
  group: CategoryGroup;
  imgSize: number;
}) {
  const { availableTiers: tiers } = useContext(ShopContext);

  const groupCategories = useMemo(() => CATEGORY_GROUPS[group], [group]);

  const tiersOfGroup = useMemo(() => {
    if (!tiers) return [];

    return groupCategories.reduce(
      (acc, cat) => [...acc, ...tiers[cat]],
      [] as Tier[]
    );
  }, [tiers, groupCategories]);

  return tiersOfGroup.length ? (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, ${imgSize}px)`,
        gap: 16,
      }}
    >
      {tiersOfGroup.map((t) => (
        <TierShopButton key={t.tierId} tier={t} buttonSize={imgSize} />
      ))}
    </div>
  ) : (
    <div style={{ columnSpan: "all" }}>None</div>
  );
}

export default function Drop() {
  const router = useRouter();

  const dropId = useMemo(() => {
    const id = router.query.dropId as string;

    if (!id || isNaN(parseInt(id))) return undefined;

    return parseInt(id);
  }, [router.query.dropId]);

  const drop = useMemo(() => DROPS.find((d) => d.id === dropId), [dropId]);

  const isSmallScreen = useIsSmallScreen();

  const { width } = useWindowSize();

  const imgSize = useMemo(
    () => (isSmallScreen ? (width ? width - 24 : 320) : 240),
    [isSmallScreen, width]
  );

  return (
    <ToolbarBagView
      frame
      header={`Drop #${drop?.id.toString().padStart(3, "0")} | ${drop?.name}`}
      backButton={{ href: "/drops" }}
    >
      <div
        style={{
          position: "relative",
          ...(isSmallScreen
            ? {
                paddingTop: 16,
              }
            : {
                maxWidth: imgSize * 4 + 16 * 3, // fit 4 columns with gap
                padding: 48,
                paddingLeft: 120,
                paddingTop: 16,
              }),
        }}
      >
        <div style={{ marginBottom: 80 }}>
          <h1
            style={{
              fontSize: isSmallScreen ? FONT_SIZE["3xl"] : FONT_SIZE["4xl"],
            }}
          >
            {drop?.name}
          </h1>

          <div style={{ fontWeight: "bold" }}>
            {drop?.dateCreated} | {drop?.itemCount} items
          </div>

          <p>{drop?.summary}</p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: 64,
          }}
        >
          {CATEGORY_GROUP_NAMES.map((g) => (
            <div key={g}>
              <div
                style={{
                  position: "sticky",
                  top: isSmallScreen ? 0 : 12,
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
                    {g}
                  </RoundedFrame>
                </div>
              </div>

              <CategoryGroupGrid group={g} imgSize={imgSize} />
            </div>
          ))}
        </div>
      </div>
    </ToolbarBagView>
  );
}
