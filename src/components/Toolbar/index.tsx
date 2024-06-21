import { useIsSmallScreen } from "@/hooks/useIsSmallScreen";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import Blinker from "../shared/Blinker";
import Wallet from "./Wallet";

export const TOOLBAR_HEIGHT = 50;

export default function Index() {
  const router = useRouter();

  const pathText = useMemo(() => {
    if (router.pathname.includes("mint")) return "MINT";
    if (router.pathname.includes("wallet")) return "WALLET";
    return null;
  }, [router.pathname]);

  const isSmallScreen = useIsSmallScreen();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        gap: 20,
        height: TOOLBAR_HEIGHT,
        ...(isSmallScreen
          ? { fontSize: "0.8rem" }
          : { position: "fixed", top: 0, left: 0, right: 0 }),
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 20,
          flex: 1,
        }}
      >
        <Link href={"/"}>
          <h1
            style={{
              margin: 0,
              display: "block",
              appearance: "none",
              color: "black",
              fontSize: "3.6rem",
              lineHeight: 0,
              letterSpacing: 4,
            }}
          >
            BANNYVERSE
          </h1>
        </Link>

        {pathText && (
          <span
            style={{
              textTransform: "uppercase",
              letterSpacing: 3,
              fontSize: "1.5rem",
            }}
          >
            {pathText}
          </span>
        )}
      </div>

      {isSmallScreen ? null : (
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <Blinker />
          Work in progress
        </div>
      )}

      {/* <MusicPlayer /> */}
      <Wallet />
    </div>
  );
}
