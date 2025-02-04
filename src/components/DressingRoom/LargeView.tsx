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
            gap: 24,
            padding: 8,
            paddingLeft: 120,
          },
          header: `Dress Banny #${tokenId.toString()}`,
          content: (
            <>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: 8,
                  paddingBottom: 80,
                  gap: 48,
                }}
              >
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
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  gap: 4,
                  padding: 4,
                  maxWidth: 480,
                  width: "50vw",
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

                <DecorateButton />
              </div>
            </>
          ),
        },
      ]}
    />
  );
}
