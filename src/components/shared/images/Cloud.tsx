import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

export default function RandCloud({
  y,
  initialX,
}: {
  y: number;
  initialX: number;
}) {
  const [parentHeight, setParentHeight] = useState<number>(initialX);
  const [x, setX] = useState<number>(initialX);

  const cloudId = useMemo(() => Math.floor(Math.random() * 8), []);

  const ref = useCallback((node: HTMLImageElement | null) => {
    if (!node) return;

    if (node.parentElement) setParentHeight(node.parentElement.clientHeight);

    setInterval(() => {
      const { left, width } = node.getBoundingClientRect();

      if (left && left > window.innerWidth) {
        setX(-width);
      }
    }, 1000);
  }, []);

  useEffect(() => {
    let stepSize = (parentHeight - y) / 50; // clouds move faster at top than bottom

    stepSize = Math.ceil(stepSize / 2) * 2;

    const interval = setInterval(() => {
      setX((_x) => _x + stepSize);
    }, 1000);

    return () => clearInterval(interval);
  }, [y, parentHeight]);

  const { width, height } = useMemo(() => {
    switch (cloudId) {
      case 0:
        return { width: 48, height: 16 };
      case 1:
      case 3:
        return { width: 48, height: 24 };
      case 2:
        return { width: 64, height: 24 };
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
      ref={ref}
      style={{ position: "absolute", top: y, left: x, objectFit: "contain" }}
      width={width * 2.5}
      height={height * 2.5}
      alt={`cloud-${cloudId}`}
      src={`/assets/clouds/${cloudId}.svg`}
    />
  );
}
