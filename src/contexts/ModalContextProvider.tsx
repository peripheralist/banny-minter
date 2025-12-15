import { useWindowSize } from "@/hooks/useWindowSize";
import { PropsWithChildren, useCallback, useEffect, useState } from "react";
import { ModalConfig, ModalContext } from "./modalContext";

const shadowColor = `#000000aa`;

export default function ModalContextProvider({ children }: PropsWithChildren) {
  const [modals, setModals] = useState<ModalConfig[]>([]);

  const { isSmallScreen } = useWindowSize();

  const openModal = useCallback((m: ModalConfig) => {
    setModals((_modals) => {
      if (_modals.some(({ id }) => id === m.id)) {
        // Replace already open modal on re-render
        return _modals.map((_m) => (_m.id === m.id ? m : _m));
      }
      return [..._modals, m];
    });
  }, []);

  const closeModal = useCallback((id: string, skipOnClose?: boolean) => {
    setModals((m) => {
      if (!skipOnClose) {
        m.find(({ id: _id }) => _id === id)?.onClose?.();
      }
      return m.filter(({ id: _id }) => _id !== id);
    });
  }, []);

  const closeTopModal = useCallback(() => {
    setModals((m) => {
      const _modals = m;
      _modals.pop()?.onClose?.();
      return m.slice(0, m.length - 1);
    });
  }, []);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeTopModal();
      }
    };

    window.addEventListener("keyup", fn);

    return () => window.removeEventListener("keyup", fn);
  }, [closeTopModal]);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      {modals.length > 0
        ? modals.map(({ modal }) => (
            <div // backdrop
              key={modal.key}
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
              onClick={closeTopModal}
            >
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                {modal}
              </div>
            </div>
          ))
        : null}
    </ModalContext.Provider>
  );
}
