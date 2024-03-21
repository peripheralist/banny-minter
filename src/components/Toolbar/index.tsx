import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import MusicPlayer from "../MusicPlayer";
import Wallet from "./Wallet";
import Blinker from "../shared/Blinker";
import { useIsSmallScreen } from "@/hooks/useIsSmallScreen";

export const TOOLBAR_HEIGHT = 48;

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
        padding: "10px 20px",
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
        }}
      >
        <Link href={"/"}>
          <h1
            style={{
              margin: 0,
              display: "block",
              appearance: "none",
              color: "black",
              lineHeight: 1.25,
            }}
          >
            Bannyverse
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

      {/* <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <Blinker />
        Work in progress
      </div> */}

      {/* <MusicPlayer /> */}
      <Wallet />
    </div>
  );
}
