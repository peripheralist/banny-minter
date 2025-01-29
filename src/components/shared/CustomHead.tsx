import Head from "next/head";
import React from "react";

export default function CustomHead({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  const _title = title ?? "Banny Retail";

  return (
    <Head>
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />

      <title>{_title}</title>
      <meta property="og:title" content={_title} />
      <meta property="twitter:title" content={_title} />

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
