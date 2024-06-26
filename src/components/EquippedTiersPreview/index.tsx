import { CATEGORIES, Category } from "@/constants/nfts";
import { EquippedTiers } from "@/model/tier";
import { TierPreview } from "./TierPreview";

export default function EquippedTiersPreview({
  ...props
}: {
  equipped: EquippedTiers;
  equippingCategory?: Category;
  unequippingCategory?: Category;
  size: number;
  pixelSize?: number;
}) {
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
      {CATEGORIES.map((c) => (
        <TierPreview key={c} category={c} {...props} />
      ))}
    </div>
  );
}
