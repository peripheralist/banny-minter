import { COLORS } from "@/constants/colors";
import { useMeasuredRef } from "@/hooks/useMeasuredRef";
import { PropsWithChildren, useCallback, useEffect, useState } from "react";
import ButtonPad from "./ButtonPad";
import RoundedFrame from "./RoundedFrame";
import { useWindowSize } from "@/hooks/useWindowSize";

export default function Modal({
  open,
  action,
  onClose,
  children,
  size,
}: PropsWithChildren<{
  size?: "sm";
  action?: { onClick: VoidFunction; text: string };
  open?: boolean;
  onClose?: VoidFunction;
}>) {
  const [isOpen, setIsOpen] = useState<boolean>();

  const { isSmallScreen } = useWindowSize();

  useEffect(() => setIsOpen(open), [open]);

  const _onClose = useCallback(() => {
    setIsOpen(false);
    onClose?.();
  }, [onClose]);

  const { measuredRef: footerRef, height: footerHeight } = useMeasuredRef();

  const ActionButton = useCallback(() => {
    if (!action) return null;

    return (
      <ButtonPad
        onClick={action.onClick}
        fillFg={COLORS.pink}
        style={{
          padding: "12px 16px",
          color: "white",
        }}
        shadow="sm"
      >
        {action.text}
      </ButtonPad>
    );
  }, [action]);

  const CloseButton = useCallback(
    () => (
      <ButtonPad
        onClick={_onClose}
        fillFg={"white"}
        shadow="sm"
        style={{ padding: 12 }}
      >
        Close
      </ButtonPad>
    ),
    [_onClose]
  );

  const _Modal = useCallback(() => {
    if (isSmallScreen) {
      return (
        <>
          <RoundedFrame
            background={COLORS.bananaHint}
            containerStyle={{ height: "auto", marginBottom: footerHeight }}
            style={{
              width: "calc(100vw - 24px)",
              maxHeight: `calc(100vh - ${footerHeight + 48}px)`,
              padding: 24,
              overflow: "auto",
            }}
          >
            {children}
          </RoundedFrame>

          <div
            ref={footerRef}
            style={{
              position: "fixed",
              bottom: 12,
              left: 12,
              right: 12,
              display: "flex",
              flexDirection: "column",
              gap: 8,
              zIndex: 999,
            }}
          >
            <ActionButton />

            <CloseButton />
          </div>
        </>
      );
    }

    return (
      <>
        <RoundedFrame
          background={COLORS.bananaHint}
          containerStyle={{ height: "auto" }}
          style={{
            minWidth: 320,
            width: size === "sm" ? 640 : undefined,
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
          <ActionButton />

          <CloseButton />
        </div>
      </>
    );
  }, [
    ActionButton,
    CloseButton,
    children,
    footerHeight,
    footerRef,
    isSmallScreen,
    size,
  ]);

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
        <_Modal />
      </div>
    </div>
  );
}
