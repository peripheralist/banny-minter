import Head from "next/head";

export default function CustomHead({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

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

      {/* twitter pixel */}
      <script>
        {`!function(e,t,n,s,u,a)
          {e.twq ||
            ((s = e.twq =
              function () {
                s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments);
              }),
            (s.version = "1.1"),
            (s.queue = []),
            (u = t.createElement(n)),
            (u.async = !0),
            (u.src = "https://static.ads-twitter.com/uwt.js"),
            (a = t.getElementsByTagName(n)[0]),
            a.parentNode.insertBefore(u, a))}
          (window,document,'script'); twq('config','p8ahl');`}
      </script>
    </Head>
  );
}
