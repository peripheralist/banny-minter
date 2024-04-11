import React, { CSSProperties, useMemo } from "react";

export default function PixelShape({
  plot,
  width,
  height,
  fill,
  style,
  pixelSize,
  getSvg,
}: {
  plot: (x: number, y: number) => boolean;
  width: number;
  height: number;
  fill: CSSProperties["fill"];
  style?: CSSProperties;
  pixelSize?: number;
  getSvg?: (svg: string) => void;
}) {
  const p = useMemo(() => pixelSize ?? 2, [pixelSize]);

  const svg = useMemo(() => {
    let data = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">`;

    for (let y = 0; y <= height; y += p) {
      for (let x = 0; x <= width; x += p) {
        const _y = height - y;
        if (_y >= 0 && _y < height && plot(x, y)) {
          data += `<rect x="${x}" y="${_y}" width="${p}" height="${p}" fill="${fill}"/>`;
        }
      }
    }

    getSvg?.(data);

    return data;
  }, [width, height, p, plot, fill, getSvg]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width,
        height,
        ...style,
      }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
