import { useCallback, useState } from "react";

export function useIsHover() {
  const [isHover, setIsHover] = useState(false);

  const onMouseEnter = useCallback(() => setIsHover(true), []);
  const onMouseLeave = useCallback(() => setIsHover(false), []);

  return { onMouseEnter, onMouseLeave, isHover };
}
