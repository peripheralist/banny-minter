import Image from "next/image";
import React, { CSSProperties } from "react";

export default function CheckBadge({ style }: { style?: CSSProperties }) {
  return (
    <Image
      style={style}
      width={30}
      height={30}
      src={"/assets/check-badge.png"}
      alt="checkmark"
    />
  );
}
