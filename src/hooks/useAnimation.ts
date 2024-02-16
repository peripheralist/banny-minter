import { useCallback, useState } from "react";

export function useAnimation(props?: { interval?: number; step?: number }) {
  const [frame, setFrame] = useState<number>(0);

  const animate = useCallback(
    (forward?: boolean) => {
      const step = props?.step ?? 0.1;
      const interval = props?.interval ?? 100;

      setFrame((f) =>
        forward ? Math.min(f + step, 1) : Math.max(f - step, 0)
      );

      return new Promise((r) => {
        const id = setInterval(() => {
          setFrame((f) => {
            const val = forward ? Math.min(f + step, 1) : Math.max(f - step, 0);
            if (forward ? val === 1 : val === 0) {
              clearInterval(id);
              r(true);
            }
            return val;
          });
        }, interval);
      });
    },
    [props]
  );

  return { frame, animate, setFrame };
}
