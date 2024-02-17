import React, { CSSProperties } from "react";
import PixelShape from "./PixelShape";

export default function PixelArc({
  radius,
  thickness,
  ...props
}: {
  radius: number;
  thickness: number;
  width: number;
  height: number;
  fill: CSSProperties["fill"];
  pixelSize?: number;
  style?: CSSProperties;
}) {
  return (
    <PixelShape
      {...props}
      plot={(x, y) => {
        if (x > radius || y > radius) {
          return y <= Math.sqrt((radius + thickness) ** 2 - x ** 2);
        }
        return y > Math.sqrt(radius ** 2 - x ** 2);
      }}
    />
  );
}
