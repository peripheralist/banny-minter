import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { ShopContext } from "@/contexts/shopContext";
import { useIsSmallScreen } from "@/hooks/useIsSmallScreen";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useMemo } from "react";
import { useAccount, useEnsName } from "wagmi";
import CurrentChain from "./CurrentChain";
import Wallet from "./Wallet";

export const TOOLBAR_WIDTH = 120;

export default function Index({ onBagClick }: { onBagClick?: VoidFunction }) {
  const { itemsQuantity } = useContext(ShopContext);

  const { address: connectedAddress } = useAccount();

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
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 16,
        boxSizing: "border-box",
        gap: 24,
        height: "100vh",
        width: TOOLBAR_WIDTH,
        background: COLORS.banana,
        ...(isSmallScreen
          ? { fontSize: "0.8rem" }
          : { position: "fixed", top: 0, left: 0, right: 0 }),
        zIndex: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          flex: 1,
        }}
      >
        <Link href={"/"}>
          <h1
            style={{
              appearance: "none",
              color: "black",
              fontSize: FONT_SIZE["2xl"],
              margin: 0,
              marginBottom: 16,
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
          href={"/drops"}
          // hidden={currentPath === "store"}
          style={{
            fontSize: FONT_SIZE.lg,
            color: "black",
          }}
        >
          Drops
        </Link>
      </div>

      {connectedAddress && (
        <Link
          href={"/closet/" + connectedAddress}
          // hidden={currentPath === "store"}
          style={{
            fontSize: FONT_SIZE.lg,
            color: "black",
          }}
        >
          Closet
        </Link>
      )}
      {/* <MusicPlayer /> */}
      <CurrentChain />
      <div onClick={onBagClick}>{`Bag (${itemsQuantity})`}</div>
      <Wallet />
    </div>
  );
}
