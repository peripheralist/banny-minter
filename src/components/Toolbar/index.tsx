import { useIsHover } from "@/hooks/useIsHover";
import { useWindowSize } from "@/hooks/useWindowSize";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties, PropsWithChildren, useMemo } from "react";
import { useAccount } from "wagmi";
import Loading from "../shared/Loading";
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
      <HomeButton />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          gap: 8,
        }}
      >
        <_Link frame href={"/drops/1"}>
          Drop #01
        </_Link>

        <_Link frame href={"/catalog"}>
          Catalog
        </_Link>

        {connectedAddress && (
          <_Link frame href={"/locker/" + connectedAddress}>
            Locker
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
}: PropsWithChildren<{
  href: string;
  frame?: boolean;
  onMouseEnter?: VoidFunction;
  onMouseLeave?: VoidFunction;
  style?: CSSProperties;
}>) {
  const { isHover, ...hoverProps } = useIsHover();

  const router = useRouter();

  const active = useMemo(
    () => router.asPath === props.href,
    [router.asPath, props.href]
  );

  return (
    <Link
      {...hoverProps}
      {...props}
      style={{
        position: "relative",
        padding: 0,
        pointerEvents: active ? "none" : undefined,
        ...props.style,
      }}
    >
      {frame ? (
        <RoundedFrame
          background={isHover || active ? "white" : undefined}
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

function HomeButton() {
  const { isHover, ...hoverProps } = useIsHover();

  const width = TOOLBAR_WIDTH - 12;
  const height = ((TOOLBAR_WIDTH - 12) * 8) / 14;

  return (
    <_Link href={"/"} {...hoverProps} style={{ width, height }}>
      {isHover ? (
        <div style={{ width, height }}>
          <Loading />
        </div>
      ) : (
        <Image
          src={"/assets/banny_eyes.svg"}
          width={width}
          height={height}
          alt="banny eyes"
        />
      )}
    </_Link>
  );
}
