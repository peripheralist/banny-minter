import { useCallback, useState } from "react";

/**
 * Returns a `ref` and the calculated width and height of the element using that ref.
 * @param dependencies Any values that would cause the `ref` element to re-render.
 */
export function useMeasuredRef(...dependencies: unknown[]) {
  const [node, setNode] = useState<HTMLDivElement>();
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const measuredRef = useCallback(
    (_node: HTMLDivElement) => {
      const fn = () => {
        setTimeout(() => {
          if (!_node) return;

          const rect = _node.getBoundingClientRect();
          setWidth(rect.width);
          setHeight(rect.height);

          setNode(_node);
        }, 0);
      };

      fn();

      if (_node) _node.addEventListener("resize", fn);
      document.addEventListener("resize", fn);
      window.addEventListener("resize", fn);
    },
    [...dependencies]
  );

  return { measuredRef, node, width, height };
}
