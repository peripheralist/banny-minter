import { useMeasuredRef } from "@/hooks/useMeasuredRef";
import { PropsWithChildren } from "react";
import FuzzMoment from "../pixelRenderers/FuzzMoment";

const bg = "#000000dd";
const height = 8 * 15;

export default function AlertBanner({ children }: PropsWithChildren) {
  const { measuredRef, width } = useMeasuredRef();

  return (
    <div
      ref={measuredRef}
      style={{
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        zIndex: 100,
        inset: 0,
      }}
    >
      <FuzzMoment
        fill={bg}
        width={width}
        height={height}
        duration={800}
        pixelSize={8}
        onFinished={
          <div
            style={{
              position: "fixed",
              left: 0,
              right: 0,
              height,
              background: bg,
              padding: 10,
            }}
          >
            {children}
          </div>
        }
      />
    </div>
  );
}
