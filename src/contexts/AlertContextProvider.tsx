import Modal from "@/components/shared/Modal";
import Link from "next/link";
import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import { Alert, AlertContext, Href } from "./alertContext";
import { FONT_SIZE } from "@/constants/fontSize";

export default function AlertContextProvider({ children }: PropsWithChildren) {
  const [_alert, _setAlert] = useState<Alert>();

  const setAlert = useCallback((alert: Alert) => {
    _setAlert(alert);
  }, []);

  const reset = useCallback(() => {
    _setAlert(undefined);
  }, []);

  const content = useMemo(() => {
    if (!_alert) return null;

    const { title, body, action } = _alert;

    return (
      <div
        style={{
          minWidth: 240,
          height: "100%",
          position: "relative",
          color: "black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          whiteSpace: "break-spaces",
          gap: 16,
        }}
      >
        {title && (
          <div style={{ fontSize: FONT_SIZE.xl, textAlign: "center" }}>
            {title}
          </div>
        )}

        {body && <div style={{ fontSize: FONT_SIZE.sm }}>{body}</div>}

        {action && (
          <div style={{ fontSize: FONT_SIZE.lg }} onClick={reset}>
            <Link href={action.href}>
              {">"} {action.label}
            </Link>
          </div>
        )}
      </div>
    );
  }, [_alert, reset]);

  return (
    <AlertContext.Provider
      value={{
        alert: _alert,
        setAlert,
      }}
    >
      {children}

      <Modal open={!!content} onClose={() => reset()}>
        {content}
      </Modal>
    </AlertContext.Provider>
  );
}
