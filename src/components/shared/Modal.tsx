import { COLORS } from "@/constants/colors";
import { ModalContext } from "@/contexts/modalContext";
import { useMeasuredRef } from "@/hooks/useMeasuredRef";
import { useWindowSize } from "@/hooks/useWindowSize";
import {
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useId,
} from "react";
import ButtonPad from "./ButtonPad";
import RoundedFrame from "./RoundedFrame";

export default function Modal({
  open,
  action,
  onClose,
  children,
  size,
  id,
}: PropsWithChildren<{
  size?: "sm";
  action?: { onClick: VoidFunction; text: string };
  open?: boolean;
  onClose?: VoidFunction;
  id?: string;
}>) {
  const _id = useId();

  const __id = id ?? _id;

  const { openModal, closeModal } = useContext(ModalContext);

  const { isSmallScreen } = useWindowSize();

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
        onClick={() => closeModal?.(__id)}
        fillFg={"white"}
        shadow="sm"
        style={{ padding: 12, minWidth: 240 }}
        dimension
      >
        Close
      </ButtonPad>
    ),
    [closeModal, __id]
  );

  const _Modal = useCallback(() => {
    if (isSmallScreen) {
      return (
        <div style={{ position: "fixed", inset: 8, top: "auto" }}>
          <RoundedFrame
            background={COLORS.banana50}
            containerStyle={{ height: "auto" }}
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
              display: "flex",
              flexDirection: "column",
              gap: 8,
              zIndex: 999,
              marginTop: 8,
            }}
          >
            <ActionButton />

            <CloseButton />
          </div>
        </div>
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
            maxHeight: `calc(100vh - ${footerHeight + 36}px)`,
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
            pointerEvents: "visiblePainted",
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

  useEffect(() => {
    if (open) {
      openModal?.({
        id: __id,
        onClose,
        modal: <_Modal />,
      });
    } else {
      closeModal?.(__id);
    }
  }, [open, openModal, closeModal, onClose, __id, _Modal]);

  return null;
}
