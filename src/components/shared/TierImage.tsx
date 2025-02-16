import { Tier } from "@/model/tier";
import { useMemo } from "react";
import Fuzz from "../pixelRenderers/Fuzz";
import AssetSvg from "./AssetSvg";
import DefaultAsset from "./DefaultAsset";

function formatTierNameForSvg(name?: string) {
  return name?.toLowerCase().replaceAll(" ", "-");
}

/**
 * Renders tier image with custom placement and size within frame. Should not be used in an image stack.
 */
export default function TierImage({
  tier,
  size,
}: {
  tier: Tier | undefined;
  size: number;
}) {
  const { _size, style } = useMemo(() => {
    switch (tier?.category) {
      case "glasses":
      case "headTop":
      case "mouth":
      case "head":
        return { _size: size * 2, style: { top: "-18%", left: "-35%" } };
      case "legs":
      case "suitBottom":
        return { _size: size * 2.5, style: { top: "-132%", left: "-69%" } };
      case "suitTop":
      case "necklace":
        return { _size: size * 2, style: { top: "-77%", left: "-49%" } };
      case "naked":
      case "backside":
      case "hand":
      case "suit":
      case "specialBody":
      case "specialHead":
      case "specialLegs":
      case "specialSuit":
        return { _size: size * 1.3, style: { top: "-15%", left: "-10%" } };
      default:
        return { _size: size, style: { top: 0, left: 0 } };
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
      {tier?.category !== "naked" && (
        <DefaultAsset size={_size} type="mannequin" style={style} />
      )}

      {tier?.name ? (
        <AssetSvg
          name={tier?.name}
          size={_size}
          style={{ position: "absolute", ...style }}
        />
      ) : (
        <DefaultAsset size={_size} type="mannequin" style={style} />
      )}

      {tier?.category === "naked" && (
        <>
          <DefaultAsset size={_size} type="mouth" style={style} />
          <DefaultAsset size={_size} type="necklace" style={style} />
        </>
      )}
    </div>
  );
}
