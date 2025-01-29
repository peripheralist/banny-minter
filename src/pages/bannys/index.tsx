import { CategoryGroupGrid } from "@/components/shared/CategoryGroupGrid";
import TierShopButton from "@/components/shared/TierShopButton";
import ToolbarBagView from "@/components/shared/ToolbarBagView";
import { FONT_SIZE } from "@/constants/fontSize";
import { useAllTiers } from "@/hooks/queries/useAllTiers";
import { useWindowSize } from "@/hooks/useWindowSize";
import Head from "next/head";
import { useRouter } from "next/router";
import { useMemo } from "react";

export default function Index() {
  const { tiers } = useAllTiers();

  const { isSmallScreen, width } = useWindowSize();

  const router = useRouter();

  const imgSize = useMemo(
    () => (isSmallScreen ? (width ? (width - 32) / 2 : 320) : 240),
    [isSmallScreen, width]
  );

  return (
    <>
      <Head>
        <title>Banny Store</title>
        <meta property="og:image" content="/assets/homepage.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ToolbarBagView
          header={"Banny shop"}
          dynamicToolbar
          frame
          frameStyle={{
            position: "relative",
            padding: 48,
            paddingLeft: 120,
            paddingTop: 80,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 48,
            }}
          >
            <h1
              style={{
                fontSize: isSmallScreen ? FONT_SIZE["3xl"] : FONT_SIZE["4xl"],
              }}
            >
              Banny Shop
            </h1>

            <p>
              Choosing your Banny is the first step. Once you have yours, you
              can dress and re-dress them in Drop items anytime you like.
              <br />
              <br />
              Transferring a Banny will also transfer the rights to every worn
              item.
            </p>

            <div style={{ width: "100%" }}>
              <CategoryGroupGrid
                items={tiers?.filter((t) => t.category === "naked")}
                excludeGroups={["head", "outfit", "special", "world"]}
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
          </div>
        </ToolbarBagView>
      </main>
    </>
  );
}
