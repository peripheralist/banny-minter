import { COLORS } from "@/constants/colors";
import { PropsWithChildren, useEffect, useState } from "react";
import FuzzMoment from "../pixelRenderers/FuzzMoment";
import ButtonPad from "./ButtonPad";
import RoundedFrame from "./RoundedFrame";

const pixelSize = 8;

export default function Modal({
  open,
  onClose,
  children,
}: PropsWithChildren<{
  open?: boolean;
  onClose?: VoidFunction;
}>) {
  const [isOpen, setIsOpen] = useState<boolean>();

  useEffect(() => setIsOpen(open), [open]);

  if (!isOpen) return null;

  const shadowColor = `#00000088`;

  return (
    <div // backdrop
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
        background: shadowColor,
      }}
      onClick={() => {
        setIsOpen(false);
        onClose?.();
      }}
    >
      <FuzzMoment
        fill={"white"}
        width={pixelSize * 20}
        height={pixelSize * 20}
        pixelSize={pixelSize}
        duration={400}
        onFinished={
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <RoundedFrame
              background={COLORS.bananaHint}
              containerStyle={{ zIndex: 10 }}
              style={{
                minWidth: "40vw",
                width: "90vw",
                maxWidth: 600,
                padding: 24,
                overflow: "auto",
              }}
            >
              {children}
            </RoundedFrame>

            {onClose && (
              <ButtonPad
                onClick={onClose}
                fillFg={"white"}
                shadow="sm"
                containerStyle={{
                  marginTop: 12,
                  textAlign: "center",
                  zIndex: 10,
                }}
                style={{ padding: 12 }}
              >
                Close
              </ButtonPad>
            )}
          </div>
        }
      />
    </div>
  );
}
