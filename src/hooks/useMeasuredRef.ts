import { useCallback, useState } from "react";

export function useMeasuredRef() {
  const [node, setNode] = useState<HTMLDivElement>();
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const measuredRef = useCallback((node: HTMLDivElement) => {
    if (!node) return null;

    const fn = () => {
      setTimeout(() => {
        const rect = node.getBoundingClientRect();
        setWidth(rect.width);
        setHeight(rect.height);
      }, 0);
    };

    if (node) {
      setNode(node);

      fn();

      node.addEventListener("resize", fn);
      document.addEventListener("resize", fn);
      window.addEventListener("resize", fn);
    } else {
      setNode(undefined);

      setWidth(0);
      setHeight(0);

      window.removeEventListener("resize", fn);
      document.removeEventListener("resize", fn);
    }
  }, []);

  return { measuredRef, node, width, height };
}
