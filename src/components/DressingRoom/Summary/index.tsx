import RoundedFrame from "@/components/shared/RoundedFrame";
import { CATEGORIES, Category } from "@/constants/category";
import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { EquipmentContext } from "@/contexts/equipmentContext";
import { useMeasuredRef } from "@/hooks/useMeasuredRef";
import { formatEther } from "juice-sdk-core";
import { useCallback, useContext, useMemo } from "react";
import Fuzz from "../../pixelRenderers/Fuzz";

export default function Index() {
  const { equipped } = useContext(EquipmentContext);

  const categories = CATEGORIES.filter((c) => !!equipped[c]);

  return (
    <RoundedFrame
      shadow
      background={"#000000bb"}
      style={{
        width: "100%",
        height: "100%",
        padding: 16,
      }}
    >
      {categories.length ? (
        categories.map((c) => <SelectedTierDetail key={c} category={c} />)
      ) : (
        <div style={{ color: "white", fontSize: FONT_SIZE.sm }}>
          No items selected
        </div>
      )}
    </RoundedFrame>
  );
}

function SelectedTierDetail({ category }: { category: Category }) {
  const { equipped, equippingCategory, displayStrategy } =
    useContext(EquipmentContext);

  const { measuredRef, width } = useMeasuredRef();

  const tier = useMemo(() => equipped[category], [equipped, category]);

  const showFuzz = useMemo(
    () => equippingCategory === category && width,
    [category, equippingCategory, width]
  );

  const Content = useCallback(() => {
    if (!tier) return null;

    const { name, price, tokenId } = tier;

    switch (displayStrategy) {
      case "mint":
        return (
          <div
            style={{
              width: "100%",
              display: "inline-flex",
              justifyContent: "space-between",
            }}
          >
            <span>{name ? name : "--"}</span>
            <span>{price ? formatEther(price) : "--"} ETH </span>
          </div>
        );
      case "dress":
        return (
          <div style={{ display: "flex", width: "100%" }}>
            <div style={{ flex: 1 }}>{name ? name : "--"}</div>

            <span style={{ opacity: 0.5 }}>
              {tokenId ? `ID: ${tokenId.toString()}` : null}
            </span>
          </div>
        );
    }
  }, [tier, displayStrategy]);

  return (
    <span
      ref={measuredRef}
      style={{ color: "black", width: "100%", fontSize: FONT_SIZE.sm }}
    >
      {showFuzz ? (
        <Fuzz width={width} height={8} pixelSize={4} fill={COLORS.banana} />
      ) : (
        <div style={{ display: "flex", color: "white" }}>
          <div
            style={{
              width: "10%",
              minWidth: 120,
              color: COLORS.banana,
              textTransform: "uppercase",
            }}
          >
            {formatCategoryName(category)}:
          </div>

          <Content />
        </div>
      )}
    </span>
  );
}

function formatCategoryName(c: Category) {
  switch (c) {
    case "headTop":
      return "Head top";
    case "naked":
      return "Body";
    case "suitBottom":
      return "Suit bottom";
    case "suitTop":
      return "Suit top";
    case "topping":
      return "Special";
    case "fist":
      return "hand";
    default:
      return c;
  }
}
