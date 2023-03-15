import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/AdminPanel.module.css";

const articles = () => {
  return (
    <Layout title="Abdulmalik Adekunle | Admin Articles Page">
      <div className={styles.container}>
        <article className={styles.article}></article>
      </div>
    </Layout>
  );
};

export default articles;
