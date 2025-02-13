import TiersDemo from "@/components/TiersDemo";
import ButtonPad from "@/components/shared/ButtonPad";
import CloudSky from "@/components/shared/CloudSky";
import CustomHead from "@/components/shared/CustomHead";
import { COLORS } from "@/constants/colors";
import { DROPS } from "@/constants/drops";
import { FONT_SIZE } from "@/constants/fontSize";
import { useMeasuredRef } from "@/hooks/useMeasuredRef";
import { useWindowSize } from "@/hooks/useWindowSize";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren, useCallback, useEffect, useState } from "react";
import { Address } from "viem";
import { useAccount } from "wagmi";

const SAND_COLOR = "#EFD27C";

export default function Home() {
  const { measuredRef, height: heroHeight } = useMeasuredRef();

  const { isSmallScreen } = useWindowSize();

  const NumberedText = useCallback(
    ({ n, children }: PropsWithChildren<{ n: number }>) => (
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 8,
        }}
      >
        <div>{n}.</div>
        <div>{children}</div>
      </div>
    ),
    []
  );

  const Hero = useCallback(
    () => (
      <>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "70%",
            background: `linear-gradient(#00A6FF,#b3e4ff)`,
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            bottom: "69%",
            top: "6%",
          }}
        >
          <CloudSky />
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            left: 0,
            height: "56.5%",
            background: SAND_COLOR,
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginTop: "-3%",
          }}
        >
          <div style={{ position: "relative", width: "50%" }}>
            <Image
              src="/assets/musa_1.svg"
              alt="Musa 1"
              fill
              priority
              style={{ objectFit: "contain", objectPosition: "left" }}
            />
          </div>
          <div style={{ position: "relative", width: "50%" }}>
            <Image
              src="/assets/musa_2.svg"
              alt="Musa 2"
              fill
              priority
              style={{ objectFit: "contain", objectPosition: "right" }}
            />
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            inset: 0,
            top: heroHeight * 0.83,
            bottom: heroHeight * 0.08,
            margin: "0 auto",
          }}
        >
          <Image src="/assets/banny_shadow.svg" alt="shadow" fill />
        </div>

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TiersDemo size={heroHeight} pixelSize={8} />
        </div>
      </>
    ),
    [heroHeight]
  );

  const LogoButtonsInfo = useCallback(
    () => (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 24,
          padding: 24,
          paddingTop: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              position: "relative",
              minHeight: 120,
              background: SAND_COLOR,
            }}
          >
            <Image
              src={"/assets/banny_logo.svg"}
              fill
              alt="banny logo"
              style={{ objectFit: "contain", objectPosition: "left" }}
            />
          </div>

          <div>
            <NumberedText n={1}>
              Shop Drops for limited edition Bannys and outfits.
            </NumberedText>
            <NumberedText n={2}>Style Bannys in your locker.</NumberedText>
            <NumberedText n={3}>$BAN everything.</NumberedText>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            ...(isSmallScreen
              ? { flexDirection: "column", width: "100%" }
              : {}),
          }}
        >
          <Link href={`/drops/${DROPS[0].id}`}>
            <ButtonPad
              fillFg={COLORS.pink}
              style={{
                padding: "12px 16px",
                height: 56,
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              dimension
            >
              <div style={{ fontSize: FONT_SIZE.lg, fontWeight: "bold" }}>
                Drop {DROPS[0].id}: {DROPS[0].name}
              </div>
              <div
                style={{
                  fontSize: FONT_SIZE.xs,
                  textTransform: "uppercase",
                }}
              >
                Available now
              </div>
            </ButtonPad>
          </Link>

          <Link href={`/explore`}>
            <ButtonPad
              style={{
                padding: "12px 16px",
                height: 56,
                fontSize: FONT_SIZE.lg,
              }}
            >
              Explore
            </ButtonPad>
          </Link>

          <LockerButton />
        </div>
      </div>
    ),
    [NumberedText, isSmallScreen]
  );

  return (
    <>
      <CustomHead />

      <main>
        <div
          style={{
            position: "fixed",
            display: "flex",
            flexDirection: "column",
            inset: 0,
            overflow: "hidden",
          }}
        >
          <div
            ref={measuredRef}
            style={{
              flex: 1,
              width: "100vw",
              position: "relative",
            }}
          >
            <Hero />
          </div>

          <div style={{ background: SAND_COLOR, marginTop: "-4vw" }}>
            <LogoButtonsInfo />
          </div>
        </div>
      </main>
    </>
  );
}

function LockerButton() {
  const { address } = useAccount();

  // state value suppresses hydration warning. idk man
  const [_address, setAddress] = useState<Address>();
  useEffect(() => setAddress(address), [address]);

  if (!_address) return null;

  return (
    <Link href={`/locker/${_address}`}>
      <ButtonPad
        style={{
          padding: "12px 16px",
          height: 56,
          fontSize: FONT_SIZE.lg,
          margin: "0 auto",
        }}
      >
        Locker
      </ButtonPad>
    </Link>
  );
}
