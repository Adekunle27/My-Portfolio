import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/malik.jpg" />
      </Head>
      <Navbar />
      <div className={`${styles.container} ${styles.dark}`}>{children}</div>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Abdulmalik Adekunle | Home",
  description:
    "Hi, I&#x27;m Abdulmalik Adekunle, Frontend Developer and Software Engineer.",
  keywords: "Frontend Developer, Abdulmalik, Adekunle, Localhost_5000",
};
export default Layout;
