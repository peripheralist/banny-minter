import RoundedFrame from "@/components/shared/RoundedFrame";
import { CATEGORIES, Category } from "@/constants/nfts";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { useMeasuredRef } from "@/hooks/useMeasuredRef";
import { useContext, useMemo } from "react";
import Fuzz from "../../pixelRenderers/Fuzz";

export default function Index() {
  const { equipped } = useContext(EquipmentContext);

  return (
    <RoundedFrame shadow containerStyle={{ width: "100%", height: "100%" }}>
      <div
        style={{
          textTransform: "uppercase",
          height: "100%",
          background: "#000000c8",
          padding: 20,
        }}
      >
        {CATEGORIES.filter((c) => !!equipped[c]).map((c) => (
          <SelectedTierDetail key={c} category={c} />
        ))}
      </div>
    </RoundedFrame>
  );
}

function SelectedTierDetail({ category }: { category: Category }) {
  const { equipped, equippingCategory } = useContext(EquipmentContext);

  const { measuredRef, width } = useMeasuredRef();

  const tier = useMemo(() => equipped[category], [equipped, category]);

  const showFuzz = useMemo(
    () => equippingCategory === category && width,
    [category, equippingCategory, width]
  );

  return (
    <span ref={measuredRef} style={{ color: "white", width: "100%" }}>
      {showFuzz ? (
        <Fuzz width={width} height={12} pixelSize={4} fill="white" />
      ) : (
        tier?.detail
      )}
    </span>
  );
}
