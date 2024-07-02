import Modal from "@/components/shared/Modal";
import Link from "next/link";
import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import { AlertContext, Href } from "./alertContext";

export default function AlertContextProvider({ children }: PropsWithChildren) {
  const [_alert, _setAlert] = useState<string>();
  const [_href, _setHref] = useState<Href>();

  const setAlert = useCallback((alert: string, href?: Href) => {
    _setAlert(alert);
    _setHref(href);
  }, []);

  const reset = useCallback(() => {
    _setAlert(undefined);
    _setHref(undefined);
  }, []);

  const content = useMemo(() => {
    if (!_alert) return null;

    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <div style={{ fontSize: "2rem", textAlign: "center" }}>{_alert}</div>

        {_href && (
          <div style={{ fontSize: "1.65rem" }} onClick={reset}>
            <Link href={_href.href}>
              {">"} {_href.label}
            </Link>
          </div>
        )}

        <div
          onClick={reset}
          style={{
            position: "absolute",
            left: 5,
            top: 0,
            fontSize: "2rem",
          }}
        >
          ⨯
        </div>
      </div>
    );
  }, [_alert, _href, reset]);

  return (
    <AlertContext.Provider
      value={{
        alert: _alert,
        href: _href,
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
