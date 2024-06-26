import { Tier } from "@/model/tier";
import React, { useCallback } from "react";

export default function TierImage({
  tier,
  size,
}: {
  tier: Tier | undefined;
  size: number;
}) {
  const _Image = useCallback(() => {
    if (!tier?.image) return null;

    switch (tier.category) {
      case "glasses":
      case "headTop":
      case "mouth":
      case "head":
        return (
          <object
            style={{
              position: "absolute",
              top: "-16%",
              left: "-35%",
            }}
            width={size * 2}
            height={size * 2}
            data={tier.image}
            type="image/svg+xml"
          />
        );
      case "legs":
      case "suitBottom":
        return (
          <object
            style={{
              position: "absolute",
              top: "-110%",
              left: "-60%",
              bottom: 0,
            }}
            width={size * 2.25}
            height={size * 2.25}
            data={tier.image}
            type="image/svg+xml"
          />
        );
      case "suitTop":
        return (
          <object
            style={{
              position: "absolute",
              top: "-64%",
              left: "-30%",
              bottom: 0,
            }}
            width={size * 1.8}
            height={size * 1.8}
            data={tier.image}
            type="image/svg+xml"
          />
        );
      case "necklace":
        return (
          <object
            style={{
              position: "absolute",
              top: "-70%",
              left: "-45%",
              bottom: 0,
            }}
            width={size * 2.4}
            height={size * 2.25}
            data={tier.image}
            type="image/svg+xml"
          />
        );
      default:
        return (
          <object
            style={{ position: "absolute", top: "-10%", left: "-4%" }}
            width={size * 1.2}
            height={size * 1.2}
            data={tier.image}
            type="image/svg+xml"
          />
        );
    }
  }, [tier?.image, tier?.category, size]);

  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        overflow: "hidden",
      }}
    >
      <_Image />
    </div>
  );
}
