import { useMemo } from "react";
import { useMeasuredRef } from "./useMeasuredRef";
import { useWindowSize } from "./useWindowSize";

export function useIsSmallScreen() {
  const windowWidth = useWindowSize();

  return useMemo(
    () => (windowWidth ? windowWidth < 1000 : undefined),
    [windowWidth]
  );
}
