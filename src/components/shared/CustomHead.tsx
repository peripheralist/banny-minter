import Head from "next/head";
import React from "react";

export default function CustomHead({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <Head>
      {title && (
        <>
          <title>{title}</title>
          <meta property="og:title" content={title} key="og:title" />
          <meta property="twitter:title" content={title} key="twitter:title" />
        </>
      )}

      {description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta property="twitter:description" content={description} />
        </>
      )}
    </Head>
  );
}
