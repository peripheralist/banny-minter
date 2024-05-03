import { useMeasuredRef } from "@/hooks/useMeasuredRef";
import { useEffect, useMemo, useState } from "react";
import RandCloud from "./images/Cloud";

export default function CloudSky() {
  const [clouds, setClouds] = useState<JSX.Element[]>([]);

  const { measuredRef, width, height } = useMeasuredRef();

  const initialCount = useMemo(() => Math.floor(width / 100), [width]);

  // setup initial clouds
  useEffect(() => {
    let _clouds = [];

    for (let i = 0; i < initialCount; i++) {
      _clouds.push(
        <RandCloud
          key={i}
          left={Math.round((width * i) / initialCount) * (Math.random() + 0.5)}
          top={Math.round(Math.random() * height)}
        />
      );
    }

    setClouds(_clouds);
  }, [initialCount, width, height]);

  useEffect(() => {
    function addCloud() {
      setClouds((c) => [
        ...c,
        <RandCloud
          key={c?.length + 1}
          left={-200}
          top={Math.round(Math.random() * height)}
        />,
      ]);
    }

    addCloud();

    const interval = setInterval(addCloud, 12000);

    return () => clearInterval(interval);
  }, [height]);

  return (
    <div ref={measuredRef} style={{ width: "100%", height: "100%" }}>
      {clouds}
    </div>
  );
}
