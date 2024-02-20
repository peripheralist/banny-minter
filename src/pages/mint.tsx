import React from "react";
import Minter from "@/components/Minter";
import Head from "next/head";
import MinterContextProvider from "@/contexts/MinterContextProvider";

export default function Mint() {
  return (
    <>
      <Head>
        <title>Mint a Banny</title>
        <meta name="description" content="Mint a Banny" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <MinterContextProvider>
          <Minter />
        </MinterContextProvider>
      </main>
    </>
  );
}
