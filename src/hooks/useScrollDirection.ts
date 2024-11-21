import { useCallback, useRef, useState } from "react";

export function useScrollDirection() {
  const [direction, setDirection] = useState<"up" | "down">();
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  const onScroll = useCallback(() => {
    setPrevScrollPos((prev) => {
      const currentScrollPos = ref.current?.scrollTop ?? 0;

      if (prev > currentScrollPos) {
        setDirection("up");
      } else {
        setDirection("down");
      }

      return currentScrollPos;
    });
  }, []);

  return { direction, ref, onScroll, scrollPosition: prevScrollPos };
}
