import { useCallback, useRef, useState } from "react";

export function useScrollDirection() {
  const [direction, setDirection] = useState<"up" | "down">();
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  const onScroll = useCallback(() => {
    const currentScrollPos = ref.current?.scrollTop ?? 0;

    if (prevScrollPos > currentScrollPos) {
      setDirection("up");
    } else {
      setDirection("down");
    }

    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  return { direction, ref, onScroll };
}
