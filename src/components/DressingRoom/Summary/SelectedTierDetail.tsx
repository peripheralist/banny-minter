import { Category } from "@/constants/nfts";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { useMeasuredRef } from "@/hooks/useMeasuredRef";
import { formatEther } from "juice-sdk-core";
import { useContext, useMemo } from "react";
import Fuzz from "../../pixelRenderers/Fuzz";

export default function SelectedTierDetail({
  category,
}: {
  category: Category;
}) {
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
        <div
          style={{
            width: "100%",
            display: "inline-flex",
            justifyContent: "space-between",
          }}
        >
          <span>{tier?.name ? tier.name : "--"}</span>
          <span>{tier?.price ? formatEther(tier.price) : "--"} ETH </span>
        </div>
      )}
    </span>
  );
}
