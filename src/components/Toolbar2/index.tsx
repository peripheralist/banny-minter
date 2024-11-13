import { useIsHover } from "@/hooks/useIsHover";
import { useWindowSize } from "@/hooks/useWindowSize";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { useAccount } from "wagmi";
import RoundedFrame from "../shared/RoundedFrame";
import Wallet from "./Wallet";

export const TOOLBAR_WIDTH = 140;

export default function Index() {
  const { address: connectedAddress } = useAccount();

  const { isSmallScreen } = useWindowSize();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxSizing: "border-box",
        padding: 12,
        paddingRight: 0,
        gap: 24,
        height: "100vh",
        width: TOOLBAR_WIDTH,
        ...(isSmallScreen
          ? { fontSize: "0.8rem" }
          : { position: "fixed", top: 0, left: 0, right: 0 }),
      }}
    >
      <_Link href={"/"}>
        <Image
          src={"/assets/banny_eyes.svg"}
          width={TOOLBAR_WIDTH - 12}
          height={((TOOLBAR_WIDTH - 12) * 8) / 14}
          alt="banny eyes"
        />
      </_Link>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          gap: 8,
        }}
      >
        <_Link frame href={"/drops"}>
          Drops
        </_Link>

        <_Link frame href={"/runway"}>
          Runway
        </_Link>

        {connectedAddress && (
          <_Link frame href={"/closet/" + connectedAddress}>
            Closet
          </_Link>
        )}
      </div>

      {/* <MusicPlayer /> */}
      {/* <div onClick={onBagClick}>{`Bag (${itemsQuantity})`}</div> */}

      <Wallet />
    </div>
  );
}

function _Link({
  children,
  frame,
  ...props
}: PropsWithChildren<{ href: string; frame?: boolean }>) {
  const { isHover, ...hoverProps } = useIsHover();

  return (
    <Link
      {...props}
      {...hoverProps}
      style={{
        position: "relative",
        padding: 0,
      }}
    >
      {frame ? (
        <RoundedFrame
          background={isHover ? "white" : undefined}
          style={{
            color: "black",
            fontWeight: "bold",
            padding: "8px 16px",
            height: 40,
            textTransform: "uppercase",
          }}
        >
          {children}
        </RoundedFrame>
      ) : (
        children
      )}
    </Link>
  );
}
