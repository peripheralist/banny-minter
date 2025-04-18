import { CATEGORIES, Category } from "@/constants/category";
import { TierPreview } from "./TierPreview";
import { useMemo } from "react";
import { CategoryLib } from "@/model/categoryLib";
import { TierOrNft } from "@/model/tierOrNft";

/**
 * Layers multiple tiers into a single image, with animation for equipping/unequipping tiers.
 */
export default function EquippedTiersPreview({
  ...props
}: {
  equipped: CategoryLib<TierOrNft>;
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
