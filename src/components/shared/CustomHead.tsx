import Head from "next/head";
import React from "react";

export default function CustomHead({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  const _title = title ?? "BannyRetail";

  return (
    <Head>
      <title>{_title}</title>
      <meta property="og:title" content={_title} />
      {description && (
        <>
          <meta property="og:description" content={description} />
          <meta name="description" content={description} />
        </>
      )}
    </Head>
  );
}
