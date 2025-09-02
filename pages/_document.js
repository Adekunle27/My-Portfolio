import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <meta
          name="title"
          content="Abdulmalik Adekunle - Frontend Software Engineer & Technical Writer"
        />
        <meta
          name="description"
          content="Abdulmalik Adekunle is a passionate Frontend Software Engineer and Technical Writer specializing in React, Next.js, JavaScript, TypeScript, and Node.js. Creating dynamic web applications that deliver business value."
        />
        <meta name="author" content="Abdulmalik Adekunle" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />

        {/* Enhanced Keywords */}
        <meta
          name="keywords"
          content="Abdulmalik Adekunle, Abdulmalik, abdul-malik.me, abdulmalik.tech, Azeez Abdulmalik Adekunle, Frontend Developer, Software Engineer, React Developer, Next.js Developer, JavaScript Expert, TypeScript Developer, Technical Writer, Web Developer, Full Stack Developer, Nigeria Developer, Frontend Engineer, React Specialist, JavaScript Developer, Web Application Developer, UI/UX Developer, Modern Web Development, Portfolio Website"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://abdul-malik.me" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Abdulmalik Adekunle - Frontend Software Engineer & Technical Writer"
        />
        <meta
          property="og:description"
          content="Passionate Frontend Software Engineer creating dynamic web applications with React, Next.js, JavaScript, and TypeScript. View my projects and technical articles."
        />
        <meta property="og:url" content="https://abdul-malik.me" />
        <meta property="og:site_name" content="Abdulmalik Adekunle Portfolio" />
        <meta property="og:image" content="https://abdul-malik.me/malik.jpg" />
        <meta
          property="og:image:alt"
          content="Abdulmalik Adekunle - Frontend Software Engineer"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Localhost_5000" />
        <meta name="twitter:creator" content="@Localhost_5000" />
        <meta
          name="twitter:title"
          content="Abdulmalik Adekunle - Frontend Software Engineer & Technical Writer"
        />
        <meta
          name="twitter:description"
          content="Passionate Frontend Software Engineer creating dynamic web applications with React, Next.js, JavaScript, and TypeScript."
        />
        <meta name="twitter:image" content="https://abdul-malik.me/malik.jpg" />
        <meta
          name="twitter:image:alt"
          content="Abdulmalik Adekunle - Frontend Software Engineer"
        />

        {/* Additional SEO Meta Tags */}
        {/* <meta name="geo.region" content="NG" /> */}
        <meta name="geo.placename" content="Nigeria" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="googlebot" content="index, follow" />

        {/* Mobile & PWA */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Abdulmalik Adekunle" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="theme-color" content="#667eea" />

        {/* Links */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/malik.jpg" />

        {/* Structured Data - Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abdulmalik Adekunle",
              alternateName: ["Azeez Abdulmalik Adekunle", "Abdulmalik"],
              jobTitle: "Frontend Software Engineer",
              description:
                "Passionate Frontend Software Engineer and Technical Writer specializing in React, Next.js, JavaScript, TypeScript, and Node.js",
              url: "https://abdul-malik.me",
              image: "https://abdul-malik.me/malik.jpg",
              sameAs: [
                "https://twitter.com/Localhost_5000",
                "https://github.com/Adekunle27",
                "https://linkedin.com/in/abdulmalik-adekunle",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              knowsAbout: [
                "React",
                "Next.js",
                "JavaScript",
                "TypeScript",
                "Node.js",
                "Frontend Development",
                "Web Development",
                "Technical Writing",
              ],
              alumniOf: {
                "@type": "Organization",
                name: "Software Engineering",
              },
              nationality: "Nigerian",
              email: "malikabdulazeez27@gmail.com",
            }),
          }}
        />

        {/* Structured Data - Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Abdulmalik Adekunle Portfolio",
              url: "https://abdul-malik.me",
              description:
                "Official portfolio website of Abdulmalik Adekunle - Frontend Software Engineer and Technical Writer",
              author: {
                "@type": "Person",
                name: "Abdulmalik Adekunle",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://abdul-malik.me/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Structured Data - Professional Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Abdulmalik Adekunle - Frontend Development Services",
              description:
                "Professional frontend development and technical writing services specializing in React, Next.js, and modern web technologies",
              provider: {
                "@type": "Person",
                name: "Abdulmalik Adekunle",
              },
              areaServed: "Worldwide",
              url: "https://abdul-malik.me",
              serviceType: [
                "Frontend Development",
                "React Development",
                "Next.js Development",
                "Technical Writing",
                "Web Application Development",
              ],
            }),
          }}
        />
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
  try {
    // Check initial color preference
    function getInitialColorMode() {
      const persistedPreferenceMode = window.localStorage.getItem("theme");
      const hasPersistedPreference =
        typeof persistedPreferenceMode === "string";

      if (
        hasPersistedPreference &&
        (persistedPreferenceMode === "dark" ||
          persistedPreferenceMode === "light")
      ) {
        return persistedPreferenceMode;
      }

      // Check the current preference
      const preference = window.matchMedia("(prefers-color-scheme: dark)");
      const hasMediaQueryPreference = typeof preference.matches === "boolean";

      if (hasMediaQueryPreference) {
        const systemTheme = preference.matches ? "dark" : "light";
        window.localStorage.setItem("theme", systemTheme);
        return systemTheme;
      }

      window.localStorage.setItem("theme", "light");
      return "light";
    }

    const currentColorMode = getInitialColorMode();
    const element = document.documentElement;
    element.style.setProperty("--initial-color-mode", currentColorMode);

    // Apply the theme attribute based on the current mode
    if (currentColorMode === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  } catch (error) {
    // Fallback to light mode if anything fails
    console.warn(
      "Theme initialization failed, falling back to light mode:",
      error
    );
    document.documentElement.removeAttribute("data-theme");
    if (typeof window !== "undefined" && window.localStorage) {
      window.localStorage.setItem("theme", "light");
    }
  }
}
