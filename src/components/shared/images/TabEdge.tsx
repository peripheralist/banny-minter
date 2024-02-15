import Image from "next/image";
import React, { CSSProperties } from "react";

export default function TabEdge({
  side,
  active,
  shadow,
  style,
  width,
}: {
  side: "left" | "right";
  active?: boolean;
  shadow?: boolean;
  style?: CSSProperties;
  width?: number;
}) {
  const _width = width ?? 30;

  return (
    <Image
      style={{
        ...style,
        transform: side === "left" ? "scale(-1, 1)" : undefined,
      }}
      width={_width}
      height={_width * 2}
      src={`/assets/tab-edge${
        active ? "-active" : shadow ? "-shadow" : ""
      }.svg`}
      alt="Tab edge"
    />
  );
}
