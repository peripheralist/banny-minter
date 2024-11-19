import { useEffect, useMemo, useState } from "react";

export function useWindowSize() {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (typeof window === undefined) return;

    function handleResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isSmallScreen = useMemo(() => width !== 0 && width < 1000, [width]);

  return { width, height, isSmallScreen };
}
