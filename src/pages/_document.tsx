import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />

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
