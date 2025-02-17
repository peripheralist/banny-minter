import { EquipmentContext } from "@/contexts/equipmentContext";
import { useMeasuredRef } from "@/hooks/useMeasuredRef";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useContext, useMemo } from "react";
import { CategoryGroupGrid } from "../shared/CategoryGroupGrid";
import EquippedTiersPreview from "../shared/EquippedTiersPreview";
import FullscreenLoading from "../shared/FullscreenLoading";
import RoundedFrame from "../shared/RoundedFrame";
import ToolbarBagView from "../shared/ToolbarBagView";
import DecorateButton from "./DecorateButton";
import TierEquipButton from "./TierEquipButton";

// TODO make two columns separate sections
export default function LargeView({ tokenId }: { tokenId: bigint }) {
  const { availableTiers, equipped, equippingCategory, unequippingCategory } =
    useContext(EquipmentContext);

  const { measuredRef: previewRef, width: previewWidth } = useMeasuredRef();

  const { width, isSmallScreen } = useWindowSize();

  const imgSize = useMemo(
    () => (isSmallScreen ? (width ? (width - 32) / 2 : 320) : 240),
    [isSmallScreen, width]
  );

  if (!availableTiers) return <FullscreenLoading />;

  return (
    <ToolbarBagView
      dynamicToolbar
      sections={[
        {
          contentStyle: {
            display: "flex",
            flexDirection: "column",
            gap: 48,
            padding: 8,
            paddingLeft: 136,
            paddingBottom: 80,
            paddingTop: 12,
          },
          sectionStyle: {
            flex: 1,
          },
          header: `Locker items`,
          content: (
            <CategoryGroupGrid
              label
              emptyText="None owned"
              items={availableTiers}
              render={(t) => (
                <TierEquipButton key={t.tierId} tier={t} size={imgSize} />
              )}
              gridStyle={{
                gridTemplateColumns: `repeat(auto-fit, ${imgSize}px)`,
                gap: 4,
              }}
              excludeGroups={["banny"]}
            />
          ),
        },
        {
          sectionStyle: {
            flex: 0,
          },
          header: `Banny #${tokenId.toString()}`,
          content: (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                margin: -4,
                height: "100%",
                minWidth: 400,
                maxWidth: "30vw",
              }}
            >
              <div style={{ display: "flex", flex: 1 }} ref={previewRef}>
                <RoundedFrame
                  shadow
                  background={"white"}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <EquippedTiersPreview
                    size={previewWidth - 24}
                    equipped={equipped}
                    equippingCategory={equippingCategory}
                    unequippingCategory={unequippingCategory}
                  />
                </RoundedFrame>
              </div>

              <div style={{ margin: 8 }}>
                <DecorateButton />
              </div>
            </div>
          ),
        },
      ]}
    />
  );
}
