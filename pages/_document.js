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
        <meta name="twitter:image" content="/me.jpg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="robots" content="index, nofollow" />
        <meta property="og:title" content="Abdulmalik Adekunle" />
        <meta property="og:url" content="https://abdulmalik.tech" />
        <meta property="og:image" content="/me.jpg" />
        <meta name="apple-mobile-web-app-title" content="Abdulmalik Adekunle" />
      </Head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: themeInitializerScript,
          }}
        ></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// This function needs to be a String
const themeInitializerScript = `(function() {
	${setInitialColorMode.toString()}
	setInitialColorMode();
})()
`;

function setInitialColorMode() {
  // Check initial color preference
  function getInitialColorMode() {
    const persistedPreferenceMode = window.localStorage.getItem("theme");
    const hasPersistedPreference = typeof persistedPreferenceMode === "string";

    if (hasPersistedPreference) {
      return persistedPreferenceMode;
    }

    // Check the current preference
    const preference = window.matchMedia("(prefers-color-scheme: dark)");
    const hasMediaQueryPreference = typeof preference.matches === "boolean";

    if (hasMediaQueryPreference) {
      return preference.matches ? "dark" : "light";
    }

    return "light";
  }

  const currentColorMode = getInitialColorMode();
  const element = document.documentElement;
  element.style.setProperty("--initial-color-mode", currentColorMode);

  // If darkmode apply darkmode
  if (currentColorMode === "dark")
    document.documentElement.setAttribute("data-theme", "dark");
}
