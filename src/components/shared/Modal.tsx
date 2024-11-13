import { COLORS } from "@/constants/colors";
import { PropsWithChildren, useCallback, useEffect, useState } from "react";
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

  const _onClose = useCallback(() => {
    setIsOpen(false);
    onClose?.();
  }, [onClose]);

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
        overflow: "auto",
      }}
      onClick={_onClose}
    >
      <div
        style={{ margin: 80 }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <RoundedFrame
          background={COLORS.bananaHint}
          containerStyle={{ height: "auto" }}
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

        <ButtonPad
          onClick={_onClose}
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
      </div>
    </div>
  );
}
