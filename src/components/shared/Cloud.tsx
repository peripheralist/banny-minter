import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

const AVAILABLE_CLOUD_COUNT = 4;

export default function RandCloud({
  y,
  initialX,
}: {
  y: number;
  initialX: number;
}) {
  const [parentHeight, setParentHeight] = useState<number>(initialX);
  const [x, setX] = useState<number>(initialX);

  const cloudId = useMemo(
    () => Math.floor(Math.random() * AVAILABLE_CLOUD_COUNT),
    []
  );

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
        return { width: 128 / 2, height: 44 / 2 };
      case 1:
        return { width: 186 / 2, height: 78 / 2 };
      case 2:
        return { width: 77 / 2, height: 43 / 2 };
      case 3:
        return { width: 52 / 2, height: 20 / 2 };
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
