import { CSSProperties, useEffect, useMemo, useState } from "react";

export function useFuzz({
  enabled,
  interval,
  pixelSize,
  density,
  width,
  height,
  fill,
}: {
  enabled?: boolean;
  interval?: number;
  pixelSize?: number;
  density?: number;
  getSvg?: (svg: string) => void;
  width: number;
  height: number;
  fill: CSSProperties["fill"];
}) {
  const [fuzz, setFuzz] = useState<string>();

  useEffect(() => {
    if (!enabled) {
      setFuzz(undefined);
      return;
    }

    const p = pixelSize ?? 2;

    function update() {
      let svg = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg"><style>rect{fill:${fill};</style>`;

      const _width = width / p;
      const _height = height / p;

      for (let i = 0; i < _width * _height * (density ?? 0.5); i++) {
        svg += `<rect x="${Math.floor(Math.random() * _width) * p}" y="${
          Math.floor(Math.random() * _height) * p
        }" width="${p}" height="${p}" />`;
      }

      // for (let y = 0; y <= height; y += p) {
      //   for (let x = 0; x <= width; x += p) {
      //     const _y = height - y;
      //     if (Math.random() < (density ?? 0.5)) {
      //       svg += `<rect x="${x}" y="${_y}" width="${p}" height="${p}" fill="${fill}"/>`;
      //     }
      //   }
      // }

      svg += "</svg>";

      setFuzz(svg);
    }

    update();

    const id = setInterval(update, interval ?? 120);

    return () => clearInterval(id);
  }, [interval, width, height, fill, density, pixelSize, enabled]);

  return fuzz;
}
