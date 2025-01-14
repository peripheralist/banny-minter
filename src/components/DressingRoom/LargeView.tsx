import { COLORS } from "@/constants/colors";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { useMeasuredRef } from "@/hooks/useMeasuredRef";
import { useContext } from "react";
import { CategoryGroupGrid } from "../shared/CategoryGroupGrid";
import EquippedTiersPreview from "../shared/EquippedTiersPreview";
import FullscreenLoading from "../shared/FullscreenLoading";
import RoundedFrame from "../shared/RoundedFrame";
import DecorateButton from "./DecorateButton";
import TierEquipButton from "./TierEquipButton";

export default function LargeView() {
  const { availableTiers, equipped, equippingCategory, unequippingCategory } =
    useContext(EquipmentContext);

  const { measuredRef: previewRef, width: previewWidth } = useMeasuredRef();

  const imgSize = 200;

  if (!availableTiers) return <FullscreenLoading />;

  return (
    <div
      style={{
        maxHeight: "calc(100% - 12px)",
        display: "flex",
        alignItems: "stretch",
        gap: 12,
      }}
    >
      <RoundedFrame
        containerStyle={{ height: "auto" }}
        background={COLORS.banana100}
        style={{
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
          padding: 24,
          paddingLeft: 120,
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
      </RoundedFrame>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 12,
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
    </div>
  );
}
