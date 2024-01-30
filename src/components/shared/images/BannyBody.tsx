import Image from "next/image";
import React, { CSSProperties } from "react";

export default function BannyBody({
  style,
  active,
}: {
  style?: CSSProperties;
  active?: boolean;
}) {
  return (
    <Image
      style={style}
      width={40}
      height={40}
      src={`/assets/body${active ? "-active" : ""}.png`}
      alt="body"
    />
  );
}
