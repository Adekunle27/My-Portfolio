import "../styles/globals.css";
import { PageTransition } from "next-page-transitions";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="dark">
        <PageTransition timeout={200} classNames="page-transition">
          <Component {...pageProps} />
        </PageTransition>
      </div>

      <style jsx global>{`
        .page-transition-enter {
          opacity: 0;
        }
        .page-transition-enter-active {
          opacity: 1;
          transition: opacity 300ms;
        }
        .page-transition-exit {
          opacity: 1;
        }
        .page-transition-exit-active {
          opacity: 0;
          transition: opacity 300ms;
        }
      `}</style>
    </>
  );
}

export default MyApp;
