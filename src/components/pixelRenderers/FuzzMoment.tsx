import { CSSProperties, useEffect, useState } from "react";
import Fuzz from "./Fuzz";

export default function FuzzMoment({
  width,
  height,
  duration,
  pixelSize,
  fill,
  style,
  onFinished,
}: {
  width: number;
  height: number;
  duration?: number;
  pixelSize?: number;
  fill?: CSSProperties["fill"];
  style?: CSSProperties;
  onFinished?: JSX.Element;
}) {
  const [finished, setFinished] = useState<boolean>();

  useEffect(() => {
    const id = setTimeout(() => setFinished(true), duration ?? 400);

    return () => clearTimeout(id);
  }, [duration]);

  if (finished) return onFinished || null;

  return (
    <Fuzz
      fill={fill}
      width={width}
      height={height}
      style={style}
      pixelSize={pixelSize}
    />
  );
}
