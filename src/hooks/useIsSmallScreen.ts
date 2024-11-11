import { useMemo } from "react";
import { useWindowSize } from "./useWindowSize";

export function useIsSmallScreen() {
  const { width: windowWidth } = useWindowSize();

  return useMemo(
    () => (windowWidth ? windowWidth < 800 : undefined),
    [windowWidth]
  );
}
