import { useMemo } from "react";
import { useWindowSize } from "./useWindowSize";

/**
 * Provides a recommended size when showing a single image on screen
 */
export function useSingleImageSize() {
  const { width } = useWindowSize();

  const size = useMemo(
    () => Math.min(Math.max(width ? width - 48 : 0, 320), 480),
    [width]
  );

  return size;
}
