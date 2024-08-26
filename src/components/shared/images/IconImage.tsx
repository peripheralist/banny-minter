import { CSSProperties } from "react";

/**
 * @param name Must match path in /assets folder
 */
export default function IconImage({
  name,
  style,
  size,
}: {
  name: string;
  style?: CSSProperties;
  size?: number;
}) {
  const _size = size ?? 40;

  return (
    <div
      style={{
        ...style,
        width: _size,
        height: _size,
        maskImage: `url(/assets/${name}.svg)`,
        maskSize: "100%",
      }}
    />
  );
}
