import { CategoryGroupGrid } from "@/components/shared/CategoryGroupGrid";
import FullscreenLoading from "@/components/shared/FullscreenLoading";
import RoundedFrame from "@/components/shared/RoundedFrame";
import TierImage from "@/components/shared/TierImage";
import TierShopButton from "@/components/shared/TierShopButton";
import ToolbarBagView from "@/components/shared/ToolbarBagView";
import { CATEGORY_IDS } from "@/constants/category";
import { COLORS } from "@/constants/colors";
import { DROPS } from "@/constants/drops";
import { FONT_SIZE } from "@/constants/fontSize";
import { LOOKS_COLLECTION_ID } from "@/constants/nfts";
import { ShopContext } from "@/contexts/shopContext";
import { useNfTsQuery } from "@/generated/graphql";
import { useWindowSize } from "@/hooks/useWindowSize";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useMemo } from "react";
import { useAccount } from "wagmi";

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
      <RoundedFrame
        background={COLORS.blue50}
        borderColor={COLORS.blue200}
        containerStyle={{
          marginTop: 24,
          marginBottom: 48,
          height: "auto",
        }}
        style={{ padding: 24 }}
      >
        {needsBanny ? (
          <>
            <div style={{ marginBottom: 24 }}>
              <h1 style={{ fontSize: FONT_SIZE["2xl"], color: COLORS.blue600 }}>
                It{"'"}s dangerous to go alone. Take one of these!
              </h1>
              <p style={{ marginTop: 12, color: COLORS.blue500 }}>
                You{"'"}ll need a Banny to wear and preview Drop items. Add a
                Banny to your bag to get started.
              </p>
            </div>

            <CategoryGroupGrid
              items={allTiers.filter((t) => t.category === "naked")}
              excludeGroups={["head", "outfit", "special", "world"]}
              render={(t) => (
                <TierShopButton
                  key={t.tierId}
                  tier={t}
                  buttonSize={isSmallScreen ? imgSize - 24 : imgSize}
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
                gridTemplateColumns: `repeat(auto-fit, ${
                  isSmallScreen ? imgSize - 24 : imgSize
                }px)`,
                gap: 4,
              }}
            />
          </>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                color: COLORS.blue500,
              }}
            >
              <div style={{ margin: -12 }}>
                <TierImage
                  tier={allTiers.find((t) => t.tierId === 4)}
                  size={56}
                />
              </div>
              Looking for Banny? Check the{" "}
              <Link href={"/bannys"}>Banny Shop</Link>
            </div>
          </>
        )}
      </RoundedFrame>

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

        <p style={{ fontSize: FONT_SIZE.md }}>{drop?.summary}</p>
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
                router.push(router.asPath + `?tier=${t.tierId}`, undefined, {
                  shallow: true,
                });
              }}
            />
          )}
          gridStyle={{
            gridTemplateColumns: `repeat(auto-fit, ${imgSize}px)`,
            gap: 4,
            rowGap: 8,
          }}
        />
      </div>
    </ToolbarBagView>
  );
}
