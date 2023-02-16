import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="author" content="Abdulmalik Adekunle" />
        <meta
          name="keywords"
          content="Abdulmalik Adekunle, Abdulmalik, abdulmalik.tech, Azeez Abdulmalik Adekunle"
        />
        <meta property="og:locale" content="en-US" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="twitter:site" content="@Localhost_5000" />
        <meta name="twitter:image" content="/malik.jpg" />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link rel="preconnect" href="https://i.ibb.co/" crossOrigin />
        <link rel="manifest" href="/manifest.json" />
        <meta name="robots" content="index, nofollow" />
        <meta property="og:title" content="Abdulmalik Adekunle" />
        <meta property="og:url" content="https://abdulmalik.tech" />
        <meta property="og:image" content="/malik.jpg" />
        <meta name="apple-mobile-web-app-title" content="Abdulmalik Adekunle" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
