import { useFuzz } from "@/hooks/useFuzz";
import Image from "next/image";
import { CSSProperties } from "react";

export default function LoadingBanny({
  size,
  style,
}: {
  size: number;
  style?: CSSProperties;
}) {
  const fuzz = useFuzz({
    width: size,
    height: size,
    fill: "black",
    enabled: true,
    pixelSize: 8,
    loop: true,
    interval: 80,
    steps: [0.2, 0.4, 0.6, 0.8],
  });

  if (!fuzz) return null;

  return (
    <Image
      priority
      src="/assets/banny_silhouette.svg"
      width={size}
      height={size}
      alt="Loading banny"
      style={{
        ...style,
        maskImage: `url(data:image/svg+xml;base64,${btoa(fuzz)})`,
      }}
    />
  );
}
