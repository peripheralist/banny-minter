import React, { CSSProperties } from "react";
import PixelShape from "../PixelShape";

export default function RoundedRect({
  radius,
  fill,
  style,
}: {
  radius?: number;
  fill?: CSSProperties["fill"];
  style?: CSSProperties;
}) {
  const r = radius ?? 0;

  return (
    <div style={{ position: "relative", ...style }}>
      <div
        style={{
          position: "absolute",
          left: 0,
          top: r,
          bottom: r,
          right: `calc(100% - ${r}px)`,
          background: fill,
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 0,
          top: r,
          bottom: r,
          left: `calc(100% - ${r}px)`,
          background: fill,
        }}
      />
      <div
        style={{
          position: "absolute",
          right: r,
          top: 0,
          bottom: 0,
          left: r,
          background: fill,
        }}
      />

      <PixelShape
        style={{
          position: "absolute",
          left: 0,
          top: 0,
        }}
        width={r}
        height={r}
        pixelSize={1}
        fill={fill}
        plot={(x, y) => y <= x}
      />
      <PixelShape
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          transform: "scale(-1, 1)",
        }}
        width={r}
        height={r}
        pixelSize={1}
        fill={fill}
        plot={(x, y) => y <= x}
      />
      <PixelShape
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          transform: "scale(-1, -1)",
        }}
        width={r}
        height={r}
        pixelSize={1}
        fill={fill}
        plot={(x, y) => y <= x}
      />
      <PixelShape
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          transform: "scale(1, -1)",
        }}
        width={r}
        height={r}
        pixelSize={1}
        fill={fill}
        plot={(x, y) => y <= x}
      />
    </div>
  );
}
