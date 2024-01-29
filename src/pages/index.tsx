import Head from "next/head";
import Factory from "@/components/Factory";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

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
        <Factory />
      </main>
    </>
  );
}
