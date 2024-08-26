import { FONT_SIZE } from "@/constants/fontSize";
import { useIsSmallScreen } from "@/hooks/useIsSmallScreen";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { useEnsName } from "wagmi";
import Blinker from "../shared/Blinker";
import CurrentChain from "./CurrentChain";
import Wallet from "./Wallet";
import { COLORS } from "@/constants/colors";

export const TOOLBAR_HEIGHT = 50;

export default function Index() {
  const router = useRouter();

  const address = router.query["address"] as `0x${string}`;
  const tokenId = router.query["tokenId"] as string;

  const { data: ensName } = useEnsName({ address });

  const formattedAddress = ensName
    ? ensName
    : address
    ? `${address.substring(0, 6)}...${address.slice(38)}`
    : undefined;

  const pathText = useMemo(() => {
    if (router.pathname.includes("mint")) {
      return "SHOP";
    }
    if (router.pathname.includes("dress/")) {
      return `DRESSING ROOM: BANNY #${tokenId}`;
    }
    if (router.pathname.includes("closet/")) {
      return `${formattedAddress}'s closet`;
    }
    return null;
  }, [router.pathname, formattedAddress, tokenId]);

  const isSmallScreen = useIsSmallScreen();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 12,
        gap: 24,
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
          gap: 24,
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
              fontSize: FONT_SIZE["2xl"],
              lineHeight: 0,
              letterSpacing: 2,
            }}
          >
            Bannyverse
          </h1>
        </Link>

        {pathText && (
          <span
            style={{
              textTransform: "uppercase",
              fontSize: FONT_SIZE.xl,
              color: "black",
            }}
          >
            {pathText}
          </span>
        )}
      </div>

      {isSmallScreen ? null : (
        <div
          style={{
            display: "flex",
            gap: 8,
            alignItems: "center",
            fontSize: FONT_SIZE.sm,
          }}
        >
          <Blinker />
          Work in progress
        </div>
      )}

      {/* <MusicPlayer /> */}
      <CurrentChain />
      <Wallet />
    </div>
  );
}
