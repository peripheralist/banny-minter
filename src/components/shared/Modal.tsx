import { COLORS } from "@/constants/colors";
import { PropsWithChildren, useCallback, useEffect, useState } from "react";
import ButtonPad from "./ButtonPad";
import RoundedFrame from "./RoundedFrame";
import { useMeasuredRef } from "@/hooks/useMeasuredRef";

export default function Modal({
  open,
  footer,
  onClose,
  children,
}: PropsWithChildren<{
  footer?: JSX.Element;
  open?: boolean;
  onClose?: VoidFunction;
}>) {
  const [isOpen, setIsOpen] = useState<boolean>();

  useEffect(() => setIsOpen(open), [open]);

  const _onClose = useCallback(() => {
    setIsOpen(false);
    onClose?.();
  }, [onClose]);

  const { measuredRef: footerRef, height: footerHeight } = useMeasuredRef();

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
        zIndex: 999,
        background: shadowColor,
        overflow: "auto",
      }}
      onClick={_onClose}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <RoundedFrame
          background={COLORS.bananaHint}
          containerStyle={{ height: "auto" }}
          style={{
            minWidth: 320,
            maxWidth: "calc(100vw - 144px)",
            maxHeight: `calc(100vh - ${footerHeight + 80}px)`,
            padding: 48,
            overflow: "auto",
          }}
        >
          {children}
        </RoundedFrame>

        <div
          ref={footerRef}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            marginTop: 8,
            zIndex: 999,
          }}
        >
          {footer}

          <ButtonPad
            onClick={_onClose}
            fillFg={"white"}
            shadow="sm"
            style={{ padding: 12 }}
          >
            Close
          </ButtonPad>
        </div>
      </div>
    </div>
  );
}
