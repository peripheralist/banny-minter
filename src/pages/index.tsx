import TiersDemo from "@/components/TiersDemo";
import { TOOLBAR_HEIGHT } from "@/components/Toolbar";
import ButtonPad from "@/components/shared/ButtonPad";
import CloudSky from "@/components/shared/CloudSky";
import FullscreenLoading from "@/components/shared/FullscreenLoading";
import { COLORS } from "@/constants/colors";
import { useCategorizedTiers } from "@/hooks/queries/useCategorizedTiers";
import { useMeasuredRef } from "@/hooks/useMeasuredRef";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

export default function Home() {
  const { loading } = useCategorizedTiers();

  const { measuredRef, height } = useMeasuredRef();

  const demoSize = useMemo(
    () => Math.round((height - TOOLBAR_HEIGHT) * 0.9),
    [height]
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
          ref={measuredRef}
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100vh",
            background: "#00A6FF",
          }}
        >
          <div
            style={{
              position: "fixed",
              inset: 0,
              bottom: "70%",
              top: "10%",
              opacity: loading ? 0 : 1,
            }}
          >
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
            }}
          />

          <div
            style={{
              position: "fixed",
              width: "100vw",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Image
              src="/assets/musa_1.svg"
              alt="Musa 1"
              height={height}
              width={height / 2}
            />
            <Image
              src="/assets/musa_2.svg"
              alt="Musa 2"
              height={height}
              width={height / 2}
            />
          </div>

          {loading ? (
            <div style={{ zIndex: 1 }}>
              <FullscreenLoading />
            </div>
          ) : (
            <div style={{ paddingLeft: 20 }}>
              <Image
                style={{
                  position: "fixed",
                  bottom: "11%",
                  left: 0,
                  right: 0,
                  margin: "0 auto",
                }}
                src="/assets/banny_shadow.svg"
                alt="shadow"
                height={height / 6}
                width={height / 3}
              />

              <Link
                style={{
                  margin: "0px auto",
                  background: "red",
                }}
                href={"/mint"}
              >
                <ButtonPad
                  style={{
                    position: "fixed",
                    bottom: "6%",
                    left: 0,
                    right: 0,
                    width: 180,
                    height: 60,
                    fontSize: "2rem",
                    margin: "0 auto",
                    fontWeight: "bold",
                    zIndex: 10,
                  }}
                >
                  Play
                </ButtonPad>
              </Link>

              <TiersDemo size={demoSize} pixelSize={8} />
            </div>
          )}
        </div>
      </main>
    </>
  );
}
