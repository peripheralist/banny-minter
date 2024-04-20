import { useQuery } from "@tanstack/react-query";
import { CSSProperties, useEffect, useMemo, useState } from "react";

export function useFuzz({
  enabled,
  interval,
  pixelSize,
  width,
  height,
  fill,
  steps,
  loop,
}: {
  enabled?: boolean;
  interval?: number;
  pixelSize?: number;
  width: number;
  height: number;
  fill: CSSProperties["fill"];
  steps: number[]; // array of densities for each frame
  loop?: boolean;
}) {
  const [idx, setIdx] = useState<number>();

  const { data: variations } = useQuery({
    queryKey: ["fuzz", width, height, fill, pixelSize, steps],
    queryFn: () => {
      const p = pixelSize ?? 2;

      let _variations: string[] = [];

      for (const density of steps) {
        if (density < 0 || density > 1) {
          throw new Error("Step must be between 0 and 1");
        }

        let svg = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">`;

        const _width = width / p;
        const _height = height / p;

        for (let i = 0; i < _width * _height * density; i++) {
          svg += `<rect x="${Math.floor(Math.random() * _width) * p}" y="${
            Math.floor(Math.random() * _height) * p
          }" width="${p}" height="${p}" fill="${fill}" />`;
        }

        svg += "</svg>";

        _variations.push(svg);
      }

      return _variations;
    },
  });

  useEffect(() => {
    if (!variations) return;

    const _interval = interval ?? 120;

    if (loop) {
      setIdx(0);

      // run repeatedly
      const id = setInterval(
        () =>
          setIdx((i) =>
            i === undefined || i === variations.length - 1 ? 0 : i + 1
          ),
        _interval
      );

      return () => clearInterval(id);
    }

    if (enabled) {
      setIdx(0);

      // run once
      const id = setInterval(
        () =>
          setIdx((i) => {
            if (i === undefined) return 0;
            if (i === variations.length - 1) {
              clearInterval(id);
              return undefined;
            }
            return i + 1;
          }),
        _interval
      );

      return () => clearInterval(id);
    }

    setIdx(undefined);
  }, [enabled, variations, loop, interval]);

  const fuzz = useMemo(
    () => (idx !== undefined && variations ? variations[idx] : undefined),
    [variations, idx]
  );

  return fuzz;
}
