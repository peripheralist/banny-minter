import { Tier } from "@/model/tier";
import React, { useCallback } from "react";
import Fuzz from "../pixelRenderers/Fuzz";

/**
 * Renders tier image with custom position within frame.
 */
export default function TierImage({
  tier,
  size,
}: {
  tier: Tier | undefined;
  size: number;
}) {
  const _Image = useCallback(() => {
    if (!tier?.image) return <Fuzz width={size} height={size} />;

    switch (tier.category) {
      case "glasses":
      case "headTop":
      case "mouth":
      case "head":
        return (
          <object
            style={{
              position: "absolute",
              top: "-18%",
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
              top: "-132%",
              left: "-69%",
              bottom: 0,
            }}
            width={size * 2.5}
            height={size * 2.5}
            data={tier.image}
            type="image/svg+xml"
          />
        );
      case "suitTop":
      case "necklace":
        return (
          <object
            style={{
              position: "absolute",
              top: "-77%",
              left: "-49%",
              bottom: 0,
            }}
            width={size * 2}
            height={size * 2}
            data={tier.image}
            type="image/svg+xml"
          />
        );
      case "naked":
      case "backside":
      case "hand":
      case "specialBody":
      case "specialHead":
      case "specialLegs":
      case "specialSuit":
        return (
          <object
            style={{ position: "absolute", top: "-15%", left: "-10%" }}
            width={size * 1.3}
            height={size * 1.3}
            data={tier.image}
            type="image/svg+xml"
          />
        );
      default:
        return (
          <object
            style={{ position: "absolute", top: 0, left: 0 }}
            width={size * 1}
            height={size * 1}
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
