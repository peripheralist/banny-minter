import Head from "next/head";
import Factory from "@/components/Minter";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import MinterContextProvider from "@/contexts/MinterContextProvider";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Banny Factory</title>
        <meta name="description" content="Banny factory" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <div style={{ padding: 40 }}>
          <h1>Bannyverse is unfolding</h1>
          <p>You are in the right place</p>
          <Link href={"/mint"}>Mint</Link>
        </div>
      </main>
    </>
  );
}
