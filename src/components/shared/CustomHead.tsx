import Head from "next/head";

export default function CustomHead({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  const _title = title ?? "Banny Retail";
  const _description =
    description ??
    "Digital fashion brought to you by Juicebox. Dress your Banny in a curated selection of iconic wearables, with new items available in each Drop.";

  return (
    <Head>
      <title>{_title}</title>
      <meta name="description" content={_description} key="description" />

      <meta property="og:title" content={_title} key="og:title" />
      <meta
        property="og:description"
        content={_description}
        key="og:description"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://retail.banny.eth.sucks/assets/homepage.png"
      />

      <meta
        name="twitter:card"
        content="summary_large_image"
        key="twitter:card"
      />
      <meta name="twitter:title" content={_title} key="twitter:title" />
      <meta
        property="twitter:description"
        content={_description}
        key="twitter:description"
      />
      <meta property="twitter:image" content="/assets/homepage.png" />
    </Head>
  );
}
