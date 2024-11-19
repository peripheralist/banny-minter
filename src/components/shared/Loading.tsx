import { useMeasuredRef } from "@/hooks/useMeasuredRef";
import Image from "next/image";
import { CSSProperties } from "react";
import Fuzz from "../pixelRenderers/Fuzz";

export default function Loading() {
  const {
    measuredRef: containerRef,
    width: containerWidth,
    height: containerHeight,
  } = useMeasuredRef();
  const {
    measuredRef: imageRef,
    width,
    height,
  } = useMeasuredRef(containerWidth);

  const fuzzWidth = width * 0.116;
  const fuzzHeight = height * 0.25;
  const top = height * 0.2;

  const fuzzStyle: CSSProperties = {
    background: "black",
    height: fuzzHeight,
    position: "absolute",
    top,
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        ref={imageRef}
        style={{
          position: "relative",
          height: containerWidth * (80 / 138),
          marginTop: Math.max(
            (containerHeight - containerWidth * (80 / 138)) / 2,
            0
          ),
        }}
      >
        <Image
          src={"/assets/banny_eyes.svg"}
          fill
          alt="banny eyes loading"
          style={{ objectFit: "contain", objectPosition: "top" }}
        />

        <Fuzz
          fill={"white"}
          width={fuzzWidth}
          height={fuzzHeight}
          interval={500}
          style={{
            ...fuzzStyle,
            left: width * 0.256,
          }}
        />

        <Fuzz
          fill={"white"}
          width={fuzzWidth}
          height={fuzzHeight}
          interval={500}
          style={{
            ...fuzzStyle,
            left: width * 0.785,
          }}
        />
      </div>
    </div>
  );
}
