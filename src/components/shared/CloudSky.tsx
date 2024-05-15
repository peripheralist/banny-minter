import { useMeasuredRef } from "@/hooks/useMeasuredRef";
import { useEffect, useState } from "react";
import RandCloud from "./images/Cloud";

export default function CloudSky() {
  const [clouds, setClouds] = useState<JSX.Element[]>([]);

  const { measuredRef, width, height } = useMeasuredRef();

  useEffect(() => {
    const count = Math.floor(width / 100);
    let _clouds = [];

    const tops: number[] = [];
    for (let i = 0; i < count; i++) {
      let top = height * (i / count);
      top = Math.ceil(top / 20) * 20;
      tops.push(top); // round to nearest 20
    }
    shuffleArray(tops);

    for (let i = 0; i < count; i++) {
      let left = Math.round(width * (i / count));
      left = Math.ceil(left / 20) * 20;
      const top = tops[i];
      _clouds.push(<RandCloud key={i} initialX={left} y={top} />);
    }

    setClouds(_clouds);
  }, [width, height]);

  return (
    <div ref={measuredRef} style={{ width: "100%", height: "100%" }}>
      {clouds}
    </div>
  );
}

function shuffleArray(array: unknown[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
