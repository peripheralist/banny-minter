import { COLORS } from "@/constants/colors";
import { useWindowSize } from "@/hooks/useWindowSize";
import { PropsWithChildren, useEffect, useState } from "react";
import FuzzMoment from "../pixelRenderers/FuzzMoment";
import RoundedFrame from "./RoundedFrame";
import { FONT_SIZE } from "@/constants/fontSize";
import ButtonPad from "./ButtonPad";

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

  const { width, height } = useWindowSize();

  if (!isOpen) return null;

  const shadowColor = `${COLORS.pink}88`;

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
      }}
      onClick={() => {
        setIsOpen(false);
        onClose?.();
      }}
    >
      <FuzzMoment
        fill={COLORS.pink}
        width={pixelSize * 20}
        height={pixelSize * 20}
        pixelSize={pixelSize}
        duration={800}
        onFinished={
          <div
            style={{
              position: "relative",
              maxWidth: Math.min(640, (width ?? 0) * 0.9),
              maxHeight: (height ?? 0) * 0.8,
            }}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <RoundedFrame
              background={COLORS.bananaHint}
              containerStyle={{ zIndex: 10 }}
              style={{
                padding: 32,
                width: "100%",
                height: "100%",
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
                  height: 40,
                  marginTop: 16,
                  textAlign: "center",
                  zIndex: 10,
                }}
              >
                Done
              </ButtonPad>
            )}

            <RoundedFrame
              background={shadowColor}
              borderColor={shadowColor}
              containerStyle={{
                position: "absolute",
                height: "calc(100% + 132px)",
                top: -44,
                left: -44,
                right: -44,
                bottom: -44,
              }}
            />
          </div>
        }
      />
    </div>
  );
}
