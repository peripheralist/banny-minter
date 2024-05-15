import TiersDemo from "@/components/TiersDemo";
import { TOOLBAR_HEIGHT } from "@/components/Toolbar";
import ButtonPad from "@/components/shared/ButtonPad";
import CloudSky from "@/components/shared/CloudSky";
import FullscreenLoading from "@/components/shared/FullscreenLoading";
import { COLORS } from "@/constants/colors";
import { useCategorizedTiers } from "@/hooks/queries/useCategorizedTiers";
import { useMeasuredRef } from "@/hooks/useMeasuredRef";
import Head from "next/head";
import Link from "next/link";
import { useMemo } from "react";

export default function Home() {
  const { loading } = useCategorizedTiers();

  const { measuredRef, height } = useMeasuredRef();

  const size = useMemo(
    () => Math.round(height - TOOLBAR_HEIGHT - 100),
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
            flexDirection: "column",
            justifyContent: "center",
            height: "100vh",
            // background: "skyblue",
            backgroundImage:
              "linear-gradient(to bottom, deepskyblue, skyblue, white)",
          }}
        >
          {loading ? (
            <FullscreenLoading />
          ) : (
            <div style={{ height: size, zIndex: 2, paddingLeft: 20 }}>
              <div
                style={{
                  position: "fixed",
                  bottom: 0,
                  right: 0,
                  left: 0,
                  height: "22%",
                  background: COLORS.banana,
                }}
              />

              <TiersDemo size={size} pixelSize={8} />
            </div>
          )}

          <div
            style={{
              position: "fixed",
              bottom: 30,
              left: 0,
              right: 0,
              zIndex: 2,
            }}
          >
            <Link
              style={{
                margin: "0px auto",
                background: "red",
                zIndex: 1,
              }}
              href={"/mint"}
            >
              <ButtonPad
                style={{
                  width: 180,
                  height: 60,
                  fontSize: "2rem",
                  margin: "0 auto",
                  fontWeight: "bold",
                }}
              >
                Start
              </ButtonPad>
            </Link>
          </div>

          <div
            style={{
              position: "fixed",
              inset: 0,
              bottom: "40%",
              top: "10%",
              zIndex: 1,
              opacity: loading ? 0 : 1,
            }}
          >
            <CloudSky />
          </div>
        </div>
      </main>
    </>
  );
}
