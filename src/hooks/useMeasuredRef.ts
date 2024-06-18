import { useCallback, useState } from "react";

export function useMeasuredRef() {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const measuredRef = useCallback((node: HTMLDivElement) => {
    if (!node) return null;

    const rect = node.getBoundingClientRect();

    const fn = () => {
      setWidth(rect.height);
      setHeight(rect.height);
    };

    if (node !== null) {
      setWidth(rect.width);
      setHeight(rect.height);

      document.addEventListener("resize", fn);
      window.addEventListener("resize", fn);
    } else {
      setWidth(0);
      setHeight(0);

      window.removeEventListener("resize", fn);
      document.removeEventListener("resize", fn);
    }
  }, []);

  return { measuredRef, width, height };
}
