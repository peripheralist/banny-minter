import { Category } from "@/constants/nfts";
import { Tier } from "@/model/tier";
import React, { CSSProperties, useCallback } from "react";
import TierSelectorButton from "../TierSelectorButton";

export default function TiersGrid({
  tiers,
  imageSize,
  style,
}: {
  tiers: Tier[] | undefined;
  imageSize: number | undefined;
  style?: CSSProperties;
}) {
  const categoryMultipliedSize = useCallback(
    (c: Category) => {
      if (!imageSize) return 0;

      let multiplier = 1;

      switch (c) {
        case "head":
          multiplier = 1.1;
          break;
      }

      return imageSize * multiplier;
    },
    [imageSize]
  );

  return (
    <div
      style={{
        display: "grid",
        ...style,
      }}
    >
      {imageSize &&
        tiers?.map((t) => (
          <TierSelectorButton
            key={t.tierId}
            tier={t}
            buttonSize={imageSize}
            imageSize={categoryMultipliedSize(t.category)}
          />
        ))}
    </div>
  );
}
