import { CategoryGroupGrid } from "@/components/shared/CategoryGroupGrid";
import FullscreenLoading from "@/components/shared/FullscreenLoading";
import TierShopButton from "@/components/shared/TierShopButton";
import ToolbarBagView from "@/components/shared/ToolbarBagView";
import { CATEGORY_IDS } from "@/constants/category";
import { DROPS } from "@/constants/drops";
import { FONT_SIZE } from "@/constants/fontSize";
import { LOOKS_COLLECTION_ID } from "@/constants/nfts";
import { ShopContext } from "@/contexts/shopContext";
import { useNfTsQuery } from "@/generated/graphql";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useRouter } from "next/router";
import { useContext, useMemo } from "react";
import { useAccount } from "wagmi";
import TierDetailModal from "../../components/modals/TierDetailModal";

export default function Drop() {
  const { address } = useAccount();

  const { bag } = useContext(ShopContext);

  const bannyNfts = useNfTsQuery({
    variables: {
      where: {
        collection: LOOKS_COLLECTION_ID,
        category: CATEGORY_IDS.naked,
        owner_: {
          wallet: address?.toLowerCase() ?? null,
        },
      },
    },
  });

  const needsBanny = useMemo(
    () =>
      (!bag.length || bag.every((b) => b.tier.category !== "naked")) &&
      !bannyNfts.data?.nfts.length &&
      !bannyNfts.loading,
    [bannyNfts, bag]
  );

  const router = useRouter();

  const dropId = useMemo(() => {
    const id = router.query.dropId as string;

    if (!id || isNaN(parseInt(id))) return undefined;

    return parseInt(id);
  }, [router.query.dropId]);

  const drop = useMemo(() => DROPS.find((d) => d.id === dropId), [dropId]);

  const { width, isSmallScreen } = useWindowSize();

  const imgSize = useMemo(
    () => (isSmallScreen ? (width ? (width - 32) / 2 : 320) : 240),
    [isSmallScreen, width]
  );

  const { allTiers } = useContext(ShopContext);

  if (!allTiers) return <FullscreenLoading />;

  return (
    <ToolbarBagView
      frame
      dynamicToolbar
      frameStyle={{
        position: "relative",
        padding: 48,
        paddingLeft: 120,
        paddingTop: 24,
      }}
      header={`Drop #${drop?.id.toString().padStart(2, "0")} | ${drop?.name}`}
    >
      {needsBanny ? (
        <div style={{ marginTop: 80, marginBottom: 48 }}>
          <div style={{ marginBottom: 48 }}>
            <h1 style={{ fontSize: FONT_SIZE["3xl"] }}>
              It{"'"}s dangerous to go alone. Take one of these!
            </h1>
            <p style={{ marginTop: 12 }}>
              Add a Banny to your bag to get started.
            </p>
          </div>

          <CategoryGroupGrid
            items={allTiers.filter((t) => t.category === "naked")}
            excludeGroups={["head", "outfit", "special", "world"]}
            render={(t) => (
              <TierShopButton
                key={t.tierId}
                tier={t}
                buttonSize={imgSize}
                onClick={() => {
                  router.push(router.asPath + `?tier=${t.tierId}`, undefined, {
                    shallow: true,
                  });
                }}
              />
            )}
            gridStyle={{
              gridTemplateColumns: `repeat(auto-fit, ${imgSize}px)`,
              gap: 4,
            }}
          />
        </div>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
              marginBottom: 80,
              marginTop: 56,
              maxWidth: 960,
            }}
          >
            <h1
              style={{
                fontSize: isSmallScreen ? FONT_SIZE["3xl"] : FONT_SIZE["4xl"],
              }}
            >
              {drop?.name}
            </h1>

            <div style={{ fontWeight: "bold" }}>
              {drop?.dateCreated} | {drop?.tierIds.length} items
            </div>

            <p style={{ fontSize: FONT_SIZE.sm }}>{drop?.summary}</p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: 64,
            }}
          >
            <CategoryGroupGrid
              items={allTiers.filter((t) => t.category !== "naked")}
              label
              excludeGroups={["banny"]}
              render={(t) => (
                <TierShopButton
                  key={t.tierId}
                  tier={t}
                  buttonSize={imgSize}
                  onClick={() => {
                    router.push(
                      router.asPath + `?tier=${t.tierId}`,
                      undefined,
                      {
                        shallow: true,
                      }
                    );
                  }}
                />
              )}
              gridStyle={{
                gridTemplateColumns: `repeat(auto-fit, ${imgSize}px)`,
                gap: 4,
              }}
            />
          </div>
        </>
      )}
    </ToolbarBagView>
  );
}
