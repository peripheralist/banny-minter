import AlertBanner from "@/components/shared/AlertBanner";
import Link from "next/link";
import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import { AlertContext, Href } from "./alertContext";
import { COLORS } from "@/constants/colors";

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
        }}
      >
        <div style={{ fontSize: "2rem", textAlign: "center" }}>{_alert}</div>

        {_href && (
          <div style={{ fontSize: "1.65rem", marginTop: 10 }} onClick={reset}>
            <Link href={_href.href}>
              {">"} {_href.label}
            </Link>
          </div>
        )}

        <div
          onClick={reset}
          style={{
            position: "absolute",
            fontSize: "1.65rem",
            color: COLORS.pink,
            textTransform: "uppercase",
            top: "120%",
            fontWeight: "bold",
            padding: 10,
          }}
        >
          Close
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

      {content && <AlertBanner>{content}</AlertBanner>}
    </AlertContext.Provider>
  );
}
