import { useMemo } from "react";
import { useWindowSize } from "./useWindowSize";

export function useIsSmallScreen() {
  const { width: windowWidth } = useWindowSize();

  return useMemo(
    () => (windowWidth ? windowWidth < 1000 : undefined),
    [windowWidth]
  );
}
