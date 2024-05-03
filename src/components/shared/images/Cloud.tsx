import Image from "next/image";
import { useCallback, useMemo, useState } from "react";

export default function RandCloud({
  left,
  top,
}: {
  left: number;
  top: number;
}) {
  // const [top, setTop] = useState<number>();
  // const [left, setLeft] = useState<number>();

  const cloudId = useMemo(() => Math.floor(Math.random() * 8), []);

  // const ref = useCallback((node: HTMLImageElement | null) => {
  //   const parent = node?.parentElement;

  //   if (!parent) return;

  //   setTop(
  //     Math.round(
  //       Math.random() * parent.clientHeight * 0.5 + parent.clientHeight * 0.25
  //     )
  //   );
  //   setLeft(Math.round(Math.random() * parent.clientWidth));
  // }, []);

  const { width, height } = useMemo(() => {
    switch (cloudId) {
      case 0:
        return { width: 48, height: 16 };
      case 1:
      case 3:
        return { width: 48, height: 24 };
      case 2:
        return { width: 64, height: 32 };
      case 4:
        return { width: 32, height: 16 };
      case 5:
        return { width: 48, height: 8 };
      case 6:
      case 7:
        return { width: 64, height: 16 };
    }

    return { width: 0, height: 0 };
  }, [cloudId]);

  return (
    <Image
      className="slide-right"
      // ref={ref}
      style={{ position: "absolute", top, left, objectFit: "contain" }}
      width={width * 2.5}
      height={height * 2.5}
      alt={`cloud-${cloudId}`}
      src={`/assets/clouds/${cloudId}.svg`}
    />
  );
}
