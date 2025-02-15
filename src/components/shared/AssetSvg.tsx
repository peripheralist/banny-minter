import { ASSET_SVGS } from "@/constants/assetSvgs";
import Image from "next/image";
import { CSSProperties, useMemo } from "react";

export default function AssetSvg({
  name,
  size,
  style,
  svgStyle,
}: {
  name: string;
  size: number;
  style?: CSSProperties;
  svgStyle?: string;
}) {
  const _name = useMemo(() => name.toLowerCase().replaceAll(" ", "-"), [name]);

  const svg = useMemo(() => {
    return `<svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}' viewBox='0 0 400 400' fill='none'>${
      svgStyle ?? ""
    }${ASSET_SVGS[_name]}</svg>`;
  }, [size, _name]);

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
