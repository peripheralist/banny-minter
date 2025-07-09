import { ASSET_SVGS } from "@/constants/assetSvgs";
import Image from "next/image";
import { CSSProperties, useMemo } from "react";

/**
 * Library of asset SVGs for all tiers. Allows loading assets if they aren't available on-chain through nft or tier object.
 */
export default function AssetSvg({
  name,
  svgContents,
  size,
  style,
  svgStyle,
}: {
  name: string;
  svgContents?: string | null;
  size: number;
  style?: CSSProperties;
  svgStyle?: string;
}) {
  const _name = useMemo(() => name.toLowerCase().replaceAll(" ", "-"), [name]);

  const svg = useMemo(
    () =>
      // ASSET_SVGS pattern allows loading svg data locally when not on-chain yet
      `<svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}' viewBox='0 0 400 400' fill='none'>${
        svgStyle ?? ""
      }${svgContents ?? ASSET_SVGS[_name]}</svg>`,
    [size, _name, svgStyle, svgContents]
  );

  return (
    <Image
      width={size}
      height={size}
      style={style}
      src={`data:image/svg+xml;base64,${btoa(svg)}`}
      alt={_name}
    />
  );
}
