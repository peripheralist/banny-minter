import { useFuzz } from "@/hooks/useFuzz";
import { CSSProperties, useMemo } from "react";

const STEP_COUNT = 5;

export default function Fuzz({
  style,
  density,
  ...props
}: {
  interval?: number;
  pixelSize?: number;
  density?: number;
  width: number;
  height: number;
  fill?: CSSProperties["fill"];
  style?: CSSProperties;
}) {
  const steps = useMemo(() => {
    const _density = density ?? 0.75;

    let _steps: number[] = [];
    for (let i = 0; i < STEP_COUNT; i++) {
      _steps.push(_density);
    }

    return _steps;
  }, [density]);

  const fuzz = useFuzz({
    fill: "black",
    steps,
    loop: true,
    enabled: true,
    ...props,
  });

  if (!fuzz) return null;

  return <div style={style} dangerouslySetInnerHTML={{ __html: fuzz }} />;
}
