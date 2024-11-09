import { FONT_SIZE } from "@/constants/fontSize";
import { ShopContext } from "@/contexts/shopContext";
import { useIsSmallScreen } from "@/hooks/useIsSmallScreen";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useMemo } from "react";
import { useEnsName } from "wagmi";
import Blinker from "../shared/Blinker";
import CurrentChain from "./CurrentChain";
import Wallet from "./Wallet";
import { COLORS } from "@/constants/colors";

export const TOOLBAR_HEIGHT = 60;

export default function Index({ onBagClick }: { onBagClick?: VoidFunction }) {
  const { itemsQuantity } = useContext(ShopContext);

  const router = useRouter();

  const address = router.query["address"] as `0x${string}`;
  const tokenId = router.query["tokenId"] as string;

  const { data: ensName } = useEnsName({ address });

  const formattedAddress = ensName
    ? ensName
    : address
    ? `${address.substring(0, 6)}...${address.slice(38)}`
    : undefined;

  const currentPath = useMemo(() => {
    const pathname = router.pathname;

    if (pathname.includes("mint")) return "store";
    if (pathname.includes("dress/")) return "dress";
    if (pathname.includes("closet/")) return "closet";
  }, [router.pathname]);

  const pathText = useMemo(() => {
    switch (currentPath) {
      case "store":
        return "STORE";
      case "dress":
        return `DRESSING ROOM: BANNY #${tokenId}`;
      case "closet":
        return `${formattedAddress}'s closet`;
    }
    return null;
  }, [currentPath, formattedAddress, tokenId]);

  const isSmallScreen = useIsSmallScreen();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        boxSizing: "border-box",
        gap: 20,
        height: TOOLBAR_HEIGHT,
        background: COLORS.bananaLite,
        ...(isSmallScreen
          ? { fontSize: "0.8rem" }
          : { position: "fixed", top: 0, left: 0, right: 0 }),
        zIndex: 10,
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
              appearance: "none",
              color: "black",
              fontSize: FONT_SIZE["2xl"],
              lineHeight: 0,
              letterSpacing: 2,
            }}
          >
            0_0
          </h1>
        </Link>

        {pathText && (
          <span
            style={{
              textTransform: "uppercase",
              fontSize: FONT_SIZE["2xl"],
              color: "black",
            }}
          >
            {pathText}
          </span>
        )}

        <Link
          href={"/mint"}
          hidden={currentPath === "store"}
          style={{
            textTransform: "uppercase",
            fontSize: FONT_SIZE.xl,
            color: "black",
            opacity: 0.7,
          }}
        >
          Store
        </Link>
      </div>

      {isSmallScreen ? null : (
        <div
          style={{
            display: "flex",
            gap: 10,
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
      <div onClick={onBagClick}>{`Bag (${itemsQuantity})`}</div>
      <Wallet />
    </div>
  );
}
