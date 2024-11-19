import { CATEGORY_GROUP_NAMES } from "@/constants/category";
import { COLORS } from "@/constants/colors";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { useMeasuredRef } from "@/hooks/useMeasuredRef";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useContext } from "react";
import EquippedTiersPreview from "../EquippedTiersPreview";
import { CategoryGroupGrid2 } from "../shared/CategoryGroupGrid2";
import FullscreenLoading from "../shared/FullscreenLoading";
import RoundedFrame from "../shared/RoundedFrame";
import DecorateButton from "./DecorateButton";
import OwnedTierButton from "./OwnedTierButton";

export default function LargeView({
  button,
  includeBody,
}: {
  button: JSX.Element;
  includeBody?: boolean;
}) {
  const { availableTiers, equipped, equippingCategory, unequippingCategory } =
    useContext(EquipmentContext);

  const { measuredRef: previewRef, width: previewWidth } = useMeasuredRef();

  const { isSmallScreen } = useWindowSize();

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
        background={COLORS.bananaLite}
        style={{
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
          padding: 24,
          paddingLeft: isSmallScreen ? 24 : 120,
          paddingBottom: 80,
          gap: 48,
        }}
      >
        {CATEGORY_GROUP_NAMES.filter((g) => g !== "banny").map((g) => (
          <CategoryGroupGrid2
            label
            tiers={availableTiers}
            group={g}
            key={g}
            button={(t) => <OwnedTierButton tier={t} size={200} />}
            imgSize={200}
          />
        ))}
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
