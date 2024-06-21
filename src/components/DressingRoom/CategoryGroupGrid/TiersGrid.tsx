import { Tier } from "@/model/tier";
import { CSSProperties } from "react";
import TierSelectorButton from "../TierSelectorButton";

/**
 * Renders a grid of tiers, with size multipliers for different categories.
 * @param tiers Tiers to render
 * @param imageSize Base size of images
 * @param style CSS style
 */
export default function TiersGrid({
  tiers,
  imageSize,
  style,
}: {
  tiers: Tier[] | undefined;
  imageSize: number | undefined;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        display: "grid",
        ...style,
      }}
    >
      {imageSize &&
        tiers?.map((t) => (
          <TierSelectorButton key={t.tierId} tier={t} buttonSize={imageSize} />
        ))}
    </div>
  );
}
