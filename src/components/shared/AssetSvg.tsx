import { ASSET_SVGS } from "@/constants/assetSvgs";
import Image from "next/image";
import { CSSProperties, useMemo } from "react";

/**
 * Library of asset SVGs for all tiers. Allows loading assets if they aren't available on-chain through nft or tier object.
 */
export default function AssetSvg({
  tier,
  size,
  style,
  svgStyle,
}: {
  tier: { metadata: { productName: string }; svg?: string | null };
  size: number;
  style?: CSSProperties;
  svgStyle?: string;
}) {
  const _name = useMemo(
    () => tier.metadata.productName.toLowerCase().replaceAll(" ", "-"),
    [tier.metadata.productName],
  );

  const svg = useMemo(
    () =>
      // ASSET_SVGS pattern allows loading svg data locally when not on-chain yet
      `<svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}' viewBox='0 0 400 400' fill='none'>${
        svgStyle ?? ""
      }${_name ? ASSET_SVGS[_name] : tier.svg}</svg>`,
    [size, _name, svgStyle, tier],
  );

  return (
    <>
      <Image
        width={size}
        height={size}
        style={style}
        src={`data:image/svg+xml;base64,${btoa(svg)}`}
        alt={_name}
      />
    </>
  );
}
