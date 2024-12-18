import ButtonPad from "@/components/shared/ButtonPad";
import { CategoryGroupGrid } from "@/components/shared/CategoryGroupGrid";
import RoundedFrame from "@/components/shared/RoundedFrame";
import TierShopButton from "@/components/shared/TierShopButton";
import ToolbarBagView from "@/components/shared/ToolbarBagView";
import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { useAllTiers } from "@/hooks/queries/useAllTiers";
import { useWindowSize } from "@/hooks/useWindowSize";
import Link from "next/link";
import { useMemo } from "react";

export default function Index() {
  const { tiers } = useAllTiers();

  const { isSmallScreen, width } = useWindowSize();

  const imgSize = useMemo(
    () => (isSmallScreen ? (width ? (width - 32) / 2 : 320) : 240),
    [isSmallScreen, width]
  );

  return (
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
        <h1 style={{ fontSize: FONT_SIZE["3xl"] }}>Banny Shop</h1>

        <p>You{"'"}ll need a Banny to wear your Drop items.</p>

        <div style={{ width: "100%" }}>
          <CategoryGroupGrid
            items={tiers?.filter((t) => t.category === "naked")}
            excludeGroups={["head", "outfit", "special", "world"]}
            render={(t) => <TierShopButton tier={t} buttonSize={imgSize} />}
            gridStyle={{
              gridTemplateColumns: `repeat(auto-fit, ${imgSize}px)`,
              gap: 4,
            }}
          />
        </div>

        <div style={{ display: "inline-block", marginBottom: 48 }}>
          <RoundedFrame
            style={{
              padding: 12,
              display: "flex",
              alignItems: "baseline",
              gap: 12,
              color: COLORS.pink,
            }}
            background={"white"}
            borderColor="white"
          >
            Got a Banny? Time to shop Drops.{" "}
            <Link href={"/drops/1"}>
              <ButtonPad
                fillFg={COLORS.pink}
                style={{ color: "white", padding: 12 }}
                shadow="sm"
              >
                Drop 1: Genesis
              </ButtonPad>
            </Link>
          </RoundedFrame>
        </div>
      </div>
    </ToolbarBagView>
  );
}
