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
  const p = useMemo(() => pixelSize ?? 2, [pixelSize]);

  const svg = useMemo(() => {
    function fitToGrid(n: number) {
      let _n = n;
      while (_n % p !== 0) _n += 1;
      return _n;
    }

    function yFor(x: number) {
      return height - Math.round(plot(x)); // invert y axis
    }

    let data = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">`;

    for (let x = 0; x <= width; x += p) {
      let y = fitToGrid(yFor(x));

      if (y < 0 || y >= height) continue;

      data += `<rect x="${x}" y="${y}" width="${p}" height="${p}" fill="${fill}"/>`;

      // Fill in gaps?
      let y1 = fitToGrid(yFor(x + p));
      if (y1 === y) continue;

      const interval = y1 > y ? p : -p;
      let _y1 = y + interval;
      while (_y1 !== y1) {
        if (_y1 < 0 || _y1 >= height) break;

        data += `<rect x="${x}" y="${_y1}" width="${p}" height="${p}" fill="${fill}" />`;

        _y1 += interval;
      }
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
