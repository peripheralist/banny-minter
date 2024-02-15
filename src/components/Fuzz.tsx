import React, { CSSProperties, useEffect, useState } from "react";
import PixelShape from "./PixelShape";

export default function Fuzz(props: {
  width: number;
  height: number;
  pixelSize: number;
  fill: CSSProperties["fill"];
}) {
  const [, setRand] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRand(Math.random());
    }, 120);

    return () => clearInterval(id);
  }, []);

  return <PixelShape {...props} plot={() => Math.random() > 0.5} />;
}
