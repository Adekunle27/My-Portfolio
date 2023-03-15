import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/AdminPanel.module.css";
import Link from "next/link";

const adminpanel = () => {
  return (
    <Layout title="Abdulmalik Adekunle | Admin Panel">
      <div className={styles.container}>
        <article className={styles.article}>
          <h2 className="intro__text">Welcome to the Admin Panel.</h2> <br />
          <Link href="/adminpanel/projects">Projects</Link>
          <Link href="/adminpanel/articles">Articles</Link>
        </article>
      </div>
    </Layout>
  );
};

export default adminpanel;
