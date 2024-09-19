import TiersDemo from "@/components/TiersDemo";
import ButtonPad from "@/components/shared/ButtonPad";
import CloudSky from "@/components/shared/CloudSky";
import LoadingBanny from "@/components/shared/LoadingBanny";
import { isBrowser } from "@/constants/browser";
import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fontSize";
import { useCategorizedTiers } from "@/hooks/queries/useCategorizedTiers";
import { useMeasuredRef } from "@/hooks/useMeasuredRef";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useAccount } from "wagmi";

export default function Home() {
  const [heroScroll, setHeroScroll] = useState<number>(0);

  const { loading } = useCategorizedTiers();

  const { measuredRef, height: screenHeight } = useMeasuredRef();

  const demoSize = useMemo(
    () => Math.round(screenHeight * 0.85),
    [screenHeight]
  );

  useEffect(() => {
    const fn = () => setHeroScroll(window.scrollY / screenHeight);

    window.addEventListener("scroll", fn);

    return () => window.removeEventListener("scroll", fn);
  }, [screenHeight]);

  const NumberedText = useCallback(
    ({ n, children }: PropsWithChildren<{ n: number }>) => (
      <div style={{ display: "flex", gap: 30, alignItems: "center" }}>
        <h4 style={{ fontSize: FONT_SIZE["3xl"], lineHeight: 1, margin: 0 }}>
          {n}
        </h4>
        <p style={{ fontSize: FONT_SIZE["2xl"], margin: 0 }}>{children}</p>
      </div>
    ),
    []
  );

  const Background = useCallback(
    () => (
      <>
        <div
          style={{
            position: "fixed",
            inset: 0,
            bottom: "70%",
            top: "6%",
            zIndex: -2,
            opacity: 0.85,
          }}
        >
          {/* <h1
            style={{
              position: "fixed",
              left: 0,
              right: 0,
              top: 0,
              textAlign: "center",
              color: "black",
              fontSize: "6.4rem",
              letterSpacing: 24,
              lineHeight: 0,
            }}
          >
            Bannyverse
          </h1> */}

          <CloudSky />
        </div>

        <div
          style={{
            position: "fixed",
            bottom: 0,
            right: 0,
            left: 0,
            height: "52.5%",
            background: "#EFD27C",
            zIndex: -1,
          }}
        />

        <div
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            justifyContent: "space-between",
            zIndex: -1,
          }}
        >
          <Image
            src="/assets/musa_1.svg"
            alt="Musa 1"
            height={screenHeight}
            width={screenHeight / 2}
            priority
          />
          <Image
            src="/assets/musa_2.svg"
            alt="Musa 2"
            height={screenHeight}
            width={screenHeight / 2}
            priority
          />
        </div>
      </>
    ),
    [screenHeight]
  );

  return (
    <>
      <Head>
        <title>Banny Factory</title>
        <meta name="description" content="Banny factory" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <div
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            zIndex: -2,
            background: `linear-gradient(#00A6FF,#b3e4ff)`,
          }}
        />

        <Background />

        <Image
          style={{
            position: "fixed",
            bottom: "10.5%",
            left: 0,
            right: 0,
            margin: "0 auto",
            zIndex: -1,
            opacity: (1 - heroScroll) ** 15,
          }}
          src="/assets/banny_shadow.svg"
          alt="shadow"
          height={screenHeight / 6}
          width={screenHeight / 3}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 20,
            position: "fixed",
            bottom: "6vh",
            left: 0,
            right: 0,
            zIndex: 10,
          }}
        >
          <Link href={"/mint"}>
            <ButtonPad
              fillBorder="white"
              style={{
                width: 180,
                height: 48,
                fontSize: FONT_SIZE.lg,
                margin: "0 auto",
                fontWeight: "bold",
              }}
            >
              Shop
            </ButtonPad>
          </Link>

          <ClosetButton />
        </div>

        <div
          style={{
            position: "fixed",
            bottom: "0.5vh",
            left: 0,
            right: 0,
            textAlign: "center",
            fontSize: "2rem",
            margin: "0 auto",
            fontWeight: "bold",
            transform: "rotate(90deg)",
            opacity: (1 - heroScroll) ** 15,
          }}
        >
          {">"}
        </div>

        <div
          ref={measuredRef}
          style={{
            height: "100vh",
            overflow: "scroll",
          }}
        >
          <div style={{ opacity: 1 - heroScroll * 3 }}>
            {loading ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100vw",
                  height: "100vh",
                  paddingLeft: "1%",
                }}
              >
                <LoadingBanny size={demoSize} />
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100vw",
                  height: "100vh",
                  paddingLeft: "1%",
                }}
              >
                <TiersDemo size={demoSize} pixelSize={8} />
              </div>
            )}
          </div>
        </div>

        <div
          style={{
            width: "36vw",
            margin: "0 auto",
            paddingBottom: "18vh",
            display: "flex",
            flexDirection: "column",
            gap: 30,
            opacity: (heroScroll - 0.25) * 4,
          }}
        >
          <NumberedText n={1}>Shop for Bannys and accessories</NumberedText>
          <NumberedText n={2}>
            Dress and redress Bannys in your Closet
          </NumberedText>
          <NumberedText n={3}>
            Take part in the fruituristic economic experiment of $BANNY
          </NumberedText>
        </div>
      </main>
    </>
  );
}

function ClosetButton() {
  const { address } = useAccount();

  // state value suppresses hydration warning. idk man
  const [_address, setAddress] = useState<`0x${string}`>();
  useEffect(() => setAddress(address), [address]);

  if (!_address) return null;

  return (
    <Link href={`/closet/${_address}`}>
      <ButtonPad
        fillFg={COLORS.pink}
        fillBorder={COLORS.pink}
        style={{
          width: 180,
          height: 48,
          fontSize: FONT_SIZE.lg,
          margin: "0 auto",
          fontWeight: "bold",
          color: "white",
        }}
      >
        Closet
      </ButtonPad>
    </Link>
  );
}
