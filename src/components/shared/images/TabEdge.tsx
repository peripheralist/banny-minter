import Image from "next/image";
import React, { CSSProperties } from "react";

export default function TabEdge({
  side,
  active,
  style,
}: {
  side: "left" | "right";
  active?: boolean;
  style?: CSSProperties;
}) {
  return (
    <Image
      style={{
        ...style,
        transform: side === "left" ? "scale(-1, 1)" : undefined,
      }}
      width={30}
      height={60}
      src={`/assets/tab-edge${active ? "-active" : ""}.png`}
      alt="tab edge"
    />
  );
}
