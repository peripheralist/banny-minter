import { useEffect, useState } from "react";

export function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState<number>();

  useEffect(() => {
    if (typeof window === undefined) return;

    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
}
