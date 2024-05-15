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
      document.addEventListener("resize", fn);
      window.addEventListener("resize", fn);
      setWidth(rect.width);
      setHeight(rect.height);

      return () => {
        window.removeEventListener("resize", fn);
        document.removeEventListener("resize", fn);
      };
    }
  }, []);

  return { measuredRef, width, height };
}
