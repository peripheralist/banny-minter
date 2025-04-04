import { CATEGORIES, Category } from "@/constants/category";
import { EquippedTiers } from "@/model/tier";
import { TierPreview } from "./TierPreview";
import { useMemo } from "react";

/**
 * Layers multiple tiers into a single image, with animation for equipping/unequipping tiers.
 */
export default function EquippedTiersPreview({
  ...props
}: {
  equipped: EquippedTiers;
  equippingCategory?: Category;
  unequippingCategory?: Category;
  size: number;
  pixelSize?: number;
}) {
  const previews = useMemo(
    () =>
      CATEGORIES.map((c) => <TierPreview key={c} category={c} {...props} />),
    [props]
  );

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: props.size,
        width: props.size,
      }}
    >
      {previews}
    </div>
  );
}
