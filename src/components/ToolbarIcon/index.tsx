import Image from "next/image";
import Link from "next/link";
import React, { PropsWithChildren, useState } from "react";
import Wallet from "../Toolbar2/Wallet";
import RoundedFrame from "../shared/RoundedFrame";
import { useAccount } from "wagmi";
import { COLORS } from "@/constants/colors";

export const TOOLBAR_ICON_SIZE = 40;

export default function ToolbarIcon() {
  const [isOpen, setIsOpen] = useState(false);

  const { address: connectedAddress } = useAccount();

  return (
    <div>
      <div>
        <Image
          src={"/assets/banny_eyes.svg"}
          width={(TOOLBAR_ICON_SIZE * 14) / 8}
          height={TOOLBAR_ICON_SIZE}
          alt="banny eyes"
          onClick={() => setIsOpen(true)}
        />
      </div>

      <div
        style={{
          position: "fixed",
          inset: 0,
          transition: "opacity 0.1s ease-in, transform 0.1s ease-in",
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
            right: isOpen ? 80 : "100%",
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
            padding: 12,
            gap: 12,
            maxWidth: 320,
            transition: "right 0.1s ease-in, transform 0.1s ease-in",
            background: COLORS.banana,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={"/assets/banny_eyes.svg"}
            width={(TOOLBAR_ICON_SIZE * 14) / 8}
            height={TOOLBAR_ICON_SIZE}
            alt="banny eyes"
            onClick={() => setIsOpen(false)}
            style={{ marginBottom: 24 }}
          />

          <_Link href="/">Home</_Link>
          <_Link href="/drops">Drops</_Link>
          <_Link href={"/runway"}>Runway</_Link>

          {connectedAddress && (
            <_Link href={"/closet/" + connectedAddress}>Closet</_Link>
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
  const [isHover, setIsHover] = useState(false);

  return (
    <Link
      {...props}
      style={{
        position: "relative",
        padding: 0,
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <RoundedFrame
        background={isHover ? "white" : undefined}
        style={{
          color: "black",
          fontWeight: "bold",
          padding: "12px 16px",
          height: 48,
          textTransform: "uppercase",
        }}
      >
        {children}
      </RoundedFrame>
    </Link>
  );
}
