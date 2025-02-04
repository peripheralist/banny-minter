import { COLORS } from "@/constants/colors";
import { useMeasuredRef } from "@/hooks/useMeasuredRef";
import { useWindowSize } from "@/hooks/useWindowSize";
import { PropsWithChildren, useCallback, useEffect, useState } from "react";
import ButtonPad from "./ButtonPad";
import RoundedFrame from "./RoundedFrame";

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

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        _onClose();
        setIsOpen(false);
      }
    };

    window.addEventListener("keyup", fn);

    return () => window.removeEventListener("keyup", fn);
  }, [_onClose]);

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
          minWidth: 240,
        }}
        shadow="sm"
        dimension
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
        style={{ padding: 12, minWidth: 240 }}
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
            background={COLORS.banana50}
            containerStyle={{ height: "auto", marginBottom: footerHeight + 16 }}
            style={{
              width: "calc(100vw - 24px)",
              maxHeight: `calc(100vh - ${footerHeight + 32}px)`,
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
              bottom: 8,
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
          background={COLORS.banana50}
          containerStyle={{ height: "auto" }}
          style={{
            minWidth: 320,
            width: size === "sm" ? 560 : undefined,
            maxWidth: "calc(100vw - 144px)",
            maxHeight: `calc(100vh - ${footerHeight + 48}px)`,
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
            justifyContent: action ? "space-between" : "center",
            flexWrap: "wrap-reverse",
            gap: 8,
            marginTop: 8,
            zIndex: 999,
          }}
        >
          <CloseButton />

          <ActionButton />
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
    action,
  ]);

  if (!isOpen) return null;

  const shadowColor = `#000000aa`;

  return (
    <div // backdrop
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: isSmallScreen ? "flex-end" : "center",
        width: "100vw",
        height: "100vh",
        zIndex: 999,
        background: shadowColor,
        overflow: "auto",
      }}
      onClick={_onClose}
    >
      <div
        style={{
          zIndex: 999,
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <_Modal />
      </div>
    </div>
  );
}
