import Head from "next/head";
import Link from "next/link";

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
          <h1>...is unfolding</h1>
          <p>You are in the right place</p>
          <Link href={"/mint"}>Mint</Link>
        </div>
      </main>
    </>
  );
}
