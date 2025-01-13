import { useIsHover } from "@/hooks/useIsHover";
import { useWindowSize } from "@/hooks/useWindowSize";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties, PropsWithChildren, useMemo } from "react";
import { useAccount } from "wagmi";
import Loading from "../shared/Loading";
import Wallet from "./Wallet";
import { COLORS } from "@/constants/colors";
import ButtonPad from "../shared/ButtonPad";

export const TOOLBAR_WIDTH = 156;

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
        padding: 8,
        paddingTop: 12,
        gap: 24,
        height: "100vh",
        width: TOOLBAR_WIDTH,
        overflow: "auto",
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
        <_Link frame href={"/bannys"}>
          Banny shop
        </_Link>

        <_Link frame href={"/drops/1"}>
          Drop #01
        </_Link>

        <_Link frame href={"/activity"}>
          Activity
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
        <ButtonPad
          fillFg={isHover || active ? "white" : COLORS.bananaLite}
          style={{
            color: "black",
            fontWeight: "bold",
            padding: "12px 16px",
            textTransform: "uppercase",
          }}
          shadow="sm"
          dimension
        >
          {children}
        </ButtonPad>
      ) : (
        children
      )}
    </Link>
  );
}

function HomeButton() {
  const { isHover, ...hoverProps } = useIsHover();

  const width = TOOLBAR_WIDTH - 24;
  const height = (width * 8) / 14;

  return (
    <_Link href={"/"} {...hoverProps} style={{ width, height, padding: 4 }}>
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
