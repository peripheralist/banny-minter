import TierShopButton from "@/components/DressingRoom/TierShopButton";
import { CategoryGroupGrid2 } from "@/components/shared/CategoryGroupGrid2";
import FullscreenLoading from "@/components/shared/FullscreenLoading";
import ToolbarBagView from "@/components/shared/ToolbarBagView";
import {
  CATEGORIES,
  CATEGORY_GROUPS,
  CATEGORY_GROUP_NAMES,
  CategoryGroup,
} from "@/constants/category";
import { DROPS } from "@/constants/drops";
import { FONT_SIZE } from "@/constants/fontSize";
import { ShopContext } from "@/contexts/shopContext";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Tier } from "@/model/tier";
import { useRouter } from "next/router";
import { useContext, useMemo } from "react";
import TierDetailModal from "./TierDetailModal";

export default function Drop() {
  const router = useRouter();

  const dropId = useMemo(() => {
    const id = router.query.dropId as string;

    if (!id || isNaN(parseInt(id))) return undefined;

    return parseInt(id);
  }, [router.query.dropId]);

  const drop = useMemo(() => DROPS.find((d) => d.id === dropId), [dropId]);

  const { width, isSmallScreen } = useWindowSize();

  const imgSize = useMemo(
    () => (isSmallScreen ? (width ? (width - 40) / 2 : 320) : 240),
    [isSmallScreen, width]
  );

  const { availableTiers: tiers } = useContext(ShopContext);

  const tierDetail = useMemo(() => {
    if (!tiers) return;

    const tierId = parseInt(router.asPath.split("#")[1]);

    if (isNaN(tierId) || !drop?.tierIds.includes(tierId)) return;

    return CATEGORIES.flatMap((c) => tiers[c]).find((t) => t.tierId === tierId);
  }, [router, tiers, drop]);

  const categoryGroupTiers = useMemo(() => {
    if (!tiers) return;

    return CATEGORY_GROUP_NAMES.reduce(
      (acc, group) => ({
        ...acc,
        [group]: CATEGORY_GROUPS[group].flatMap((c) =>
          tiers[c].filter((t) => drop?.tierIds.includes(t.tierId))
        ),
      }),
      {} as Record<CategoryGroup, Tier[]>
    );
  }, [tiers, drop]);

  if (!tiers) return <FullscreenLoading />;

  return (
    <>
      <ToolbarBagView
        frame
        frameStyle={{
          position: "relative",
          ...(isSmallScreen
            ? {
                paddingTop: 16,
              }
            : {
                padding: 48,
                paddingLeft: 120,
                paddingTop: 16,
              }),
        }}
        header={`Drop #${drop?.id.toString().padStart(3, "0")} | ${drop?.name}`}
        backButton={{ href: "/drops" }}
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
          <CategoryGroupGrid2
            items={categoryGroupTiers}
            label
            render={(t) => (
              <TierShopButton
                key={t.tierId}
                tier={t}
                buttonSize={imgSize}
                onClick={() => router.push({ hash: t.tierId.toString() })}
              />
            )}
            gridStyle={{
              gridTemplateColumns: `repeat(auto-fit, ${imgSize}px)`,
              gap: 16,
            }}
          />
        </div>
      </ToolbarBagView>

      <TierDetailModal
        tier={tierDetail}
        onClose={() => {
          if (router.asPath.includes("#")) {
            const newPath = router.asPath.split("#")[0];
            router.replace(newPath, undefined, { shallow: true });
          }
        }}
      />
    </>
  );
}