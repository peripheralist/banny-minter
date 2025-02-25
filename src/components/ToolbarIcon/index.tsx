import Image from "next/image";
import Link from "next/link";
import React, { PropsWithChildren, useMemo, useState } from "react";
import Wallet from "../Toolbar/Wallet";
import { useAccount } from "wagmi";
import { COLORS } from "@/constants/colors";
import { useIsHover } from "@/hooks/useIsHover";
import { useRouter } from "next/router";
import ButtonPad from "../shared/ButtonPad";

export const TOOLBAR_ICON_SIZE = 40;

export default function ToolbarIcon() {
  const [isOpen, setIsOpen] = useState(false);

  const { address: connectedAddress } = useAccount();

  return (
    <div>
      <Image
        src={"/assets/banny_eyes.svg"}
        width={(TOOLBAR_ICON_SIZE * 136) / 80}
        height={TOOLBAR_ICON_SIZE}
        alt="looks logo"
        onClick={() => setIsOpen(true)}
      />

      <div
        style={{
          position: "fixed",
          inset: 0,
          transition: "opacity 0.1s ease-in",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "all" : "none",
          background: "#00000088",
          zIndex: 100,
        }}
        onClick={() => setIsOpen(false)}
      >
        <div
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            width: isOpen ? 320 : 0,
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
            padding: "8px 12px",
            gap: 12,
            maxWidth: 320,
            transition: "width 0.1s ease-in",
            background: COLORS.banana200,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={"/assets/banny_logo.svg"}
            width={(TOOLBAR_ICON_SIZE * 456) / 80}
            height={TOOLBAR_ICON_SIZE}
            alt="looks logo"
            onClick={() => setIsOpen(false)}
            style={{ marginBottom: 24 }}
          />

          <_Link href="/">Home</_Link>
          <_Link href={"/explore"}>Explore</_Link>
          <_Link href={"/bannys"}>Banny shop</_Link>
          <_Link href="/drops/1">Drop #01</_Link>
          <_Link href={"/manifesto"}>Manifesto</_Link>

          {connectedAddress && (
            <_Link href={"/locker/" + connectedAddress}>Locker</_Link>
          )}

          <div style={{ flex: 1 }}></div>

          <div style={{ justifySelf: "flex-end" }}>
            <Wallet />
          </div>
        </div>
      </div>
    </div>
  );
}

function _Link({ children, ...props }: PropsWithChildren<{ href: string }>) {
  const { isHover, ...hoverProps } = useIsHover();

  const router = useRouter();

  const active = useMemo(
    () => router.asPath === props.href,
    [router.asPath, props.href]
  );

  return (
    <Link
      {...props}
      {...hoverProps}
      style={{
        position: "relative",
        padding: 0,
      }}
    >
      <ButtonPad
        fillFg={isHover || active ? "white" : COLORS.banana50}
        style={{
          color: "black",
          fontWeight: "bold",
          padding: 16,
          textTransform: "uppercase",
        }}
        dimension
      >
        {children}
      </ButtonPad>
    </Link>
  );
}
