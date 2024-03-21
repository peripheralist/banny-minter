import { useMemo } from "react";
import { useMeasuredRef } from "./useMeasuredRef";
import { useWindowWidth } from "./useWindowWidth";

export function useIsSmallScreen() {
  const windowWidth = useWindowWidth();

  return useMemo(
    () => (windowWidth ? windowWidth < 1000 : undefined),
    [windowWidth]
  );
}
