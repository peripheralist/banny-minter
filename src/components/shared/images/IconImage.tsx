import Image from "next/image";
import { CSSProperties } from "react";

/**
 * @param name Must match path in /assets folder
 */
export default function IconImage({
  name,
  style,
}: {
  name: string;
  style?: CSSProperties;
}) {
  return (
    <Image
      style={style}
      width={40}
      height={40}
      src={`/assets/${name}.svg`}
      alt={name}
    />
  );
}
