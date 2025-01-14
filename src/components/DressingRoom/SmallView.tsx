import { COLORS } from "@/constants/colors";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { useMeasuredRef } from "@/hooks/useMeasuredRef";
import { useContext, useMemo } from "react";
import { CategoryGroupGrid } from "../shared/CategoryGroupGrid";
import EquippedTiersPreview from "../shared/EquippedTiersPreview";
import FullscreenLoading from "../shared/FullscreenLoading";
import RoundedFrame from "../shared/RoundedFrame";
import DecorateButton from "./DecorateButton";
import TierEquipButton from "./TierEquipButton";
import { useWindowSize } from "@/hooks/useWindowSize";
import { FONT_SIZE } from "@/constants/fontSize";
import { CATEGORY_GROUPS, CATEGORY_GROUP_NAMES } from "@/constants/category";

export default function SmallView() {
  const { availableTiers, equipped, equippingCategory, unequippingCategory } =
    useContext(EquipmentContext);

  const { measuredRef: previewRef, width: previewWidth } = useMeasuredRef();

  if (!availableTiers) return <FullscreenLoading />;

  return (
    <>
      <div style={{ marginBottom: 12 }} ref={previewRef}>
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

      <div
        style={{
          display: "flex",
          padding: 12,
          marginLeft: -12,
          marginRight: -12,
          overflow: "auto",
        }}
      >
        {CATEGORY_GROUP_NAMES.filter((g) => g !== "banny").map((g) => {
          const groupTiers = availableTiers.filter((t) =>
            CATEGORY_GROUPS[g].includes(t.category)
          );

          return (
            <>
              <div
                style={{
                  position: "sticky",
                  top: 0,
                  left: 0,
                  width: 0,
                  overflow: "visible",
                }}
              >
                <RoundedFrame
                  background={"black"}
                  containerStyle={{ height: 24, width: 120 }}
                  style={{
                    color: COLORS.banana100,
                    textTransform: "uppercase",
                    padding: "4px 24px",
                    textAlign: "center",
                  }}
                >
                  {g}
                </RoundedFrame>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 4,
                  marginTop: 32,
                  marginRight: 120,
                }}
              >
                {groupTiers.length
                  ? groupTiers.map((t) => (
                      <TierEquipButton
                        key={t.tierId}
                        tier={t}
                        size={180}
                        labelStyle={{
                          fontSize: FONT_SIZE.xs,
                          whiteSpace: "pre",
                          paddingLeft: 4,
                          paddingRight: 4,
                          paddingBottom: 4,
                        }}
                      />
                    ))
                  : "None owned"}
              </div>
            </>
          );
        })}
      </div>

      <div
        style={{
          position: "fixed",
          width: "calc(100% - 24px)",
          zIndex: 200,
          bottom: 12,
        }}
      >
        <DecorateButton />
      </div>
    </>
  );
}
