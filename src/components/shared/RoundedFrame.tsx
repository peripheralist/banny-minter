import { CSSProperties, PropsWithChildren } from "react";
import PixelArc from "../pixelRenderers/PixelArc";

export default function RoundedFrame({
  children,
  shadow,
  style,
}: PropsWithChildren<{
  shadow?: boolean;
  style?: CSSProperties;
}>) {
  const r = 8;

  return (
    <div style={{ position: "relative", overflow: "hidden", ...style }}>
      <div
        style={{
          borderRadius: 18,
          overflow: "hidden",
          height: "100%",
          boxSizing: "border-box",
        }}
      >
        {children}
      </div>

      <PixelArc
        style={{
          position: "absolute",
          left: 0,
          top: -1,
          transform: `scale(-1,1)`,
        }}
        width={10}
        height={10}
        pixelSize={1}
        fill={"black"}
        radius={6}
        thickness={4}
      />
      {shadow && (
        <PixelArc
          style={{
            position: "absolute",
            left: 4,
            top: 4,
            transform: `scale(-1,1)`,
          }}
          width={8}
          height={8}
          pixelSize={2}
          fill={"#00000064"}
          radius={4}
          thickness={6}
        />
      )}

      <PixelArc
        style={{
          position: "absolute",
          right: 0,
          top: -1,
          transform: `scale(1,1)`,
        }}
        width={10}
        height={10}
        pixelSize={1}
        fill={"black"}
        radius={6}
        thickness={4}
      />
      <PixelArc
        style={{
          position: "absolute",
          right: 0,
          bottom: -1,
          transform: `scale(1,-1)`,
        }}
        width={10}
        height={10}
        pixelSize={1}
        fill={"black"}
        radius={6}
        thickness={4}
      />
      <PixelArc
        style={{
          position: "absolute",
          left: 0,
          bottom: -1,
          transform: `scale(-1,-1)`,
        }}
        width={10}
        height={10}
        pixelSize={1}
        fill={"black"}
        radius={6}
        thickness={4}
      />

      {shadow && (
        <>
          <div
            style={{
              position: "absolute",
              background: "#00000064",
              top: r + 4,
              bottom: 2,
              left: 4,
              width: 4,
            }}
          />
          <div
            style={{
              position: "absolute",
              background: "#00000064",
              top: 4,
              left: r + 4,
              right: 2,
              height: 4,
            }}
          />
        </>
      )}

      <div
        style={{
          position: "absolute",
          background: "black",
          top: r,
          bottom: r,
          left: 0,
          width: 4,
        }}
      />
      <div
        style={{
          position: "absolute",
          background: "black",
          top: r,
          bottom: r,
          right: 0,
          width: 4,
        }}
      />
      <div
        style={{
          position: "absolute",
          background: "black",
          top: 0,
          left: r,
          right: r,
          height: 4,
        }}
      />
      <div
        style={{
          position: "absolute",
          background: "black",
          bottom: 0,
          left: r,
          right: r,
          height: 4,
        }}
      />
    </div>
  );
}
