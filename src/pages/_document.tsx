import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

const title = "Banny Retail";
const description =
  "Digital fashion brought to you by Juicebox. Dress your Banny in a curated selection of iconic wearables, with new items available in each Drop.";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} key="og:title" />
        <meta
          property="og:description"
          content={description}
          key="og:description"
        />
        <meta property="og:image" content="/assets/homepage.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} key="twitter:title" />
        <meta
          property="twitter:description"
          content={description}
          key="twitter:description"
        />
        <meta property="twitter:image" content="/assets/homepage.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jersey+10&family=Kode+Mono:wght@400..700&display=swap"
          rel="stylesheet"
        />

        <Script src="/scripts/initTwitterPixel.js" strategy="lazyOnload" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
