import React, { CSSProperties, useEffect, useState } from "react";
import PixelShape from "./PixelShape";

export default function Fuzz({
  interval,
  pixelSize,
  density,
  ...props
}: {
  width: number;
  height: number;
  pixelSize?: number;
  fill: CSSProperties["fill"];
  style?: CSSProperties;
  interval?: number;
  density?: number;
}) {
  const [, setRand] = useState(0);

  const p = pixelSize ?? 2;

  useEffect(() => {
    const id = setInterval(() => {
      setRand(Math.random());
    }, interval ?? 120);

    return () => clearInterval(id);
  }, [interval]);

  return (
    <PixelShape
      {...props}
      pixelSize={p}
      plot={() => Math.random() < (density ?? 0.5)}
    />
  );
}
