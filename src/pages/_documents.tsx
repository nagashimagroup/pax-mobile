import { Html, Head, Main, NextScript } from "next/document";

const MyDocument = () => {
  return (
    <Html lang="ja-JP">
      <Head>
        <meta name="application-name" content="Pax Mobile" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="梱包業務改善システム" />
        <link rel="canonical" href="https://m.pax-cloud.com" />
        <meta property="og:url" content="https://m.pax-cloud.com" />
        <meta property="og:title" content="Pax" />
        <meta property="og:type" content="" />
        <meta property="og:description" content="梱包業務改善システム" />
        <meta property="og:image" content="vercel.svg" />
        <meta property="og:site_name" content="Pax Mobile" />
        <meta property="og:local" content="ja_JP" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/icon-16.gif" sizes="16x16" type="image/gif" />
        <link rel="icon" href="/icon-32.gif" sizes="32x32" type="image/gif" />
        <link rel="icon" href="/icon-48.gif" sizes="48x48" type="image/gif" />
        <link rel="icon" href="/icon-96.gif" sizes="96x96" type="image/gif" />
        <link
          rel="icon"
          href="/icon-192.gif"
          sizes="192x192"
          type="image/gif"
        />
        <link
          rel="icon"
          href="/icon-144.png"
          sizes="144x144"
          type="image/png"
        />
        <link
          rel="icon"
          href="/icon-512.png"
          sizes="512x512"
          type="image/png"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#E53012" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
