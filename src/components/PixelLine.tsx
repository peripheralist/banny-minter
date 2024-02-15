import React, { CSSProperties, useMemo } from "react";

export default function PixelLine({
  plot,
  width,
  height,
  fill,
  style,
  pixelSize,
}: {
  plot: (x: number) => number;
  width: number;
  height: number;
  fill: CSSProperties["fill"];
  style?: CSSProperties;
  pixelSize?: number;
}) {
  const p = pixelSize ?? 2;

  const svg = useMemo(() => {
    let data = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">`;

    for (let x = 0; x <= width; x += p) {
      const y = Math.round(plot(x));
      data += `<rect x="${x}" y="${
        height - y - p // invert y axis
      }" width="${p}" height="${p}" fill="${fill}"/>`;
    }

    return data;
  }, [width, height, p, plot, fill]);

  return (
    <div
      style={{ width, height, ...style }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
