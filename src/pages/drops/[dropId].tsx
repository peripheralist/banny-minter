import { CategoryGroupGrid } from "@/components/shared/CategoryGroupGrid";
import CustomHead from "@/components/shared/CustomHead";
import FullscreenLoading from "@/components/shared/FullscreenLoading";
import RoundedFrame from "@/components/shared/RoundedFrame";
import TierImage from "@/components/shared/TierImage";
import TierShopButton from "@/components/shared/TierShopButton";
import ToolbarBagView from "@/components/shared/ToolbarBagView";
import { COLORS } from "@/constants/colors";
import { DROPS } from "@/constants/drops";
import { FONT_SIZE } from "@/constants/fontSize";
import { useAllTiers } from "@/hooks/queries/useAllTiers";
import { useWindowSize } from "@/hooks/useWindowSize";
import { ROUTES } from "@/utils/routes";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";

export default function Drop() {
  const [hideBannys, setHideBannys] = useState(false);

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

  const { parsedTiers } = useAllTiers();

  if (!parsedTiers) return <FullscreenLoading />;

  return (
    <>
      <CustomHead
        title={`Drop ${drop?.id}: ${drop?.name}`}
        description={drop?.summary}
      />

      <main>
        <ToolbarBagView
          dynamicToolbar
          sections={[
            {
              header: `Drop #${drop?.id.toString().padStart(2, "0")} | ${
                drop?.name
              }`,
              contentStyle: {
                position: "relative",
                padding: 48,
                paddingLeft: 136,
                paddingTop: 24,
              },
              content: (
                <>
                  <RoundedFrame
                    background={COLORS.blue50}
                    borderColor={COLORS.blue200}
                    containerStyle={{
                      marginTop: 24,
                      marginBottom: 48,
                      height: "auto",
                    }}
                    style={{ padding: 24, color: COLORS.blue600 }}
                  >
                    {hideBannys ? (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "baseline",
                          gap: 12,
                          cursor: "pointer",
                        }}
                        onClick={() => setHideBannys(false)}
                      >
                        <div
                          style={{
                            width: 80,
                            height: 24,
                            margin: -20,
                          }}
                        >
                          <TierImage
                            tier={parsedTiers.find((t) => t.tierId === 4)}
                            size={80}
                          />
                        </div>
                        <div style={{ flex: 1 }}>Looking for Banny?</div>
                        <div
                          style={{
                            lineHeight: 0,
                            height: 0,
                            fontSize: FONT_SIZE["2xl"],
                            transform: `rotate(180deg) translate(0, 8px)`,
                          }}
                        >
                          ^
                        </div>
                      </div>
                    ) : (
                      <>
                        <div style={{ marginBottom: 24 }}>
                          <div
                            style={{
                              textAlign: "right",
                              cursor: "pointer",
                              height: 0,
                              fontSize: FONT_SIZE["2xl"],
                            }}
                            onClick={() => setHideBannys(true)}
                          >
                            ^
                          </div>
                          <h1 style={{ fontSize: FONT_SIZE["2xl"] }}>
                            It{"'"}s dangerous to go alone. Take one of these!
                          </h1>
                          <p
                            style={{
                              marginTop: 12,
                              color: COLORS.blue500,
                              lineHeight: 1.25,
                            }}
                          >
                            You{"'"}ll need a Banny to wear and preview Drop
                            items. Add a Banny to your bag to get started.
                          </p>
                        </div>

                        <CategoryGroupGrid
                          items={parsedTiers.filter(
                            (t) => t.category === "body"
                          )}
                          excludeGroups={[
                            "head",
                            "outfit",
                            "special",
                            "background",
                          ]}
                          render={(t) => (
                            <TierShopButton
                              key={t.tierId}
                              tier={t}
                              buttonSize={
                                isSmallScreen ? imgSize - 24 : imgSize
                              }
                              onClick={() =>
                                ROUTES.toTier({ router, tierId: t.tierId })
                              }
                            />
                          )}
                          gridStyle={{
                            gridTemplateColumns: `repeat(auto-fit, ${
                              isSmallScreen ? imgSize - 24 : imgSize
                            }px)`,
                            gap: 4,
                            paddingTop: 0,
                          }}
                        />
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
                        fontSize: isSmallScreen
                          ? FONT_SIZE["3xl"]
                          : FONT_SIZE["4xl"],
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
                      items={parsedTiers.filter((t) => t.category !== "body")}
                      label
                      excludeGroups={["banny"]}
                      render={(t) => (
                        <TierShopButton
                          key={t.tierId}
                          tier={t}
                          buttonSize={imgSize}
                          onClick={() =>
                            ROUTES.toTier({ router, tierId: t.tierId })
                          }
                        />
                      )}
                      gridStyle={{
                        gridTemplateColumns: `repeat(auto-fit, ${imgSize}px)`,
                        gap: 4,
                        rowGap: 8,
                      }}
                    />
                  </div>
                </>
              ),
            },
          ]}
        />
      </main>
    </>
  );
}
