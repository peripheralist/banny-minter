import { useEffect, useMemo, useState } from "react";

export function useWindowSize() {
  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    if (typeof window === undefined) return;

    function handleResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isSmallScreen = useMemo(
    () => width !== undefined && width < 800,
    [width]
  );

  return { width, height, isSmallScreen };
}
