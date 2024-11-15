import TierShopButton from "@/components/DressingRoom/TierShopButton";
import { CategoryGroupGrid2 } from "@/components/shared/CategoryGroupGrid2";
import FullscreenLoading from "@/components/shared/FullscreenLoading";
import ToolbarBagView from "@/components/shared/ToolbarBagView";
import { CATEGORY_GROUP_NAMES } from "@/constants/category";
import { DROPS } from "@/constants/drops";
import { FONT_SIZE } from "@/constants/fontSize";
import { ShopContext } from "@/contexts/shopContext";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useRouter } from "next/router";
import { useContext, useMemo } from "react";

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
    () => (isSmallScreen ? (width ? width - 24 : 320) : 240),
    [isSmallScreen, width]
  );

  const { availableTiers: tiers } = useContext(ShopContext);

  if (!tiers) return <FullscreenLoading />;

  return (
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
        {CATEGORY_GROUP_NAMES.map((g) => (
          <div key={g}>
            <CategoryGroupGrid2
              group={g}
              tiers={tiers}
              label
              imgSize={imgSize}
              button={(t) => (
                <TierShopButton key={t.tierId} tier={t} buttonSize={imgSize} />
              )}
            />
          </div>
        ))}
      </div>
    </ToolbarBagView>
  );
}
