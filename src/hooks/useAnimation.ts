import { useCallback, useState } from "react";

export function useAnimation(props?: {
  interval?: number;
  step?: number;
  onDone?: VoidFunction;
}) {
  const [frame, setFrame] = useState<number>(0);

  const animate = useCallback(
    (forward?: boolean) => {
      const step = props?.step ?? 0.1;
      const interval = props?.interval ?? 100;

      function getNextFrame(f: number) {
        return forward ? Math.min(f + step, 1) : Math.max(f - step, 0);
      }

      // Initial change before interval begins
      setFrame(getNextFrame);

      return new Promise((r) => {
        const id = setInterval(() => {
          setFrame((f) => {
            const _frame = getNextFrame(f);

            if (forward ? _frame === 1 : _frame === 0) {
              // finished
              clearInterval(id);
              r(true);
            }

            return _frame;
          });
        }, interval);
      }).then(props?.onDone);
    },
    [props]
  );

  return { frame, animate, setFrame };
}
