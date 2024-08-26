import { useQuery } from "@tanstack/react-query";
import { CSSProperties } from "react";

export default function PixelCorner({
  size,
  style,
  pixelSize,
  fillOuter,
  fillInner,
  fillBorder,
}: {
  size: number;
  style?: CSSProperties;
  pixelSize?: number;
  fillOuter?: CSSProperties["background"];
  fillInner?: CSSProperties["background"];
  fillBorder?: CSSProperties["background"];
}) {
  const { data: elem } = useQuery({
    queryKey: [
      "pixel-corner",
      size,
      pixelSize,
      fillOuter,
      fillInner,
      fillBorder,
      style,
    ],
    queryFn: () => {
      const pixels = [];

      const p = pixelSize ?? 4;
      const b = fillBorder ?? "black";

      for (let x = 0; x < size; x += p) {
        for (let y = 0; y < size; y += p) {
          const _style: CSSProperties = {
            position: "absolute",
            width: p,
            height: p,
            left: x,
            top: y,
          };

          const key = `${x}-${y}`;

          if (x + y < size - p && fillOuter) {
            pixels.push(
              <div key={key} style={{ ..._style, background: fillOuter }} />
            );
          }
          if (x + y > size - p && fillInner) {
            pixels.push(
              <div key={key} style={{ ..._style, background: fillInner }} />
            );
          }
          if (x + y === size - p) {
            pixels.push(<div key={key} style={{ ..._style, background: b }} />);
          }
        }
      }

      return (
        <div
          style={{ position: "relative", width: size, height: size, ...style }}
        >
          {pixels}
        </div>
      );
    },
  });

  return elem ?? null;
}
