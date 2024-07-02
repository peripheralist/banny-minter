import { useMeasuredRef } from "@/hooks/useMeasuredRef";
import { PropsWithChildren, useEffect, useState } from "react";
import FuzzMoment from "../pixelRenderers/FuzzMoment";
import { COLORS } from "@/constants/colors";

const bg = "#000000";

const pixelSize = 8;

export default function Modal({
  open,
  onClose,
  height,
  children,
}: PropsWithChildren<{
  open?: boolean;
  height?: number;
  onClose?: VoidFunction;
}>) {
  const [isOpen, setIsOpen] = useState<boolean>();

  useEffect(() => setIsOpen(open), [open]);

  const { measuredRef, width } = useMeasuredRef();

  if (!isOpen) return null;

  const _width = Math.min(width * 0.9, pixelSize * 60);
  const _height = height ?? pixelSize * 24;

  return (
    <div // backdrop
      ref={measuredRef}
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        zIndex: 100,
      }}
      onClick={() => {
        setIsOpen(false);
        onClose?.();
      }}
    >
      <FuzzMoment
        fill={bg}
        width={_width}
        height={_height}
        pixelSize={pixelSize}
        duration={800}
        onFinished={
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            style={{
              width: _width,
              height: _height,
              background: bg,
              padding: 10,
              border: `10px solid ${COLORS.pink}`,
            }}
          >
            {children}
          </div>
        }
      />
    </div>
  );
}
