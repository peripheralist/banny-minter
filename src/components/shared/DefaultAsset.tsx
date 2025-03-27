import { DEFAULT_SVG } from "@/constants/defaultSvgs";
import Image from "next/image";
import { CSSProperties } from "react";

const wrapSvg = (contents: string) => (size: number) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 400 400" fill="none">${contents}</svg>`;

export default function DefaultAsset({
  size,
  type,
  style,
}: {
  size: number;
  type: keyof typeof DEFAULT_SVG;
  style?: CSSProperties;
}) {
  return (
    <Image
      src={`data:image/svg+xml;base64,${btoa(
        wrapSvg(DEFAULT_SVG[type])(size)
      )}`}
      width={size}
      height={size}
      style={{ position: "absolute", ...style }}
      alt={type}
    />
  );
}
