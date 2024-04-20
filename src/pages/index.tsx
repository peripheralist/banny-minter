import Loading from "@/components/Minter/Loading";
import TiersDemo from "@/components/TiersDemo";
import { TOOLBAR_HEIGHT } from "@/components/Toolbar";
import ButtonPad from "@/components/shared/ButtonPad";
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
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          {loading ? (
            <Loading />
          ) : (
            <div style={{ height: size }}>
              <TiersDemo size={size} pixelSize={8} />
            </div>
          )}
          <Link
            style={{ position: "fixed", right: 20, bottom: 20 }}
            href={"/mint"}
          >
            <ButtonPad
              style={{
                width: 120,
                height: 80,
                fontSize: "2rem",
              }}
            >
              MINT
            </ButtonPad>
          </Link>
        </div>
      </main>
    </>
  );
}
