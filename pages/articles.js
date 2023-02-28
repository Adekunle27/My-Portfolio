import React, { useState } from "react";
import Layout from "../components/Layout";

import styles from "../styles/Articles.module.css";
import { ArticleItem } from "../components/ArticleItem";
import ArticlesData from "../utils/ArticlesData";
import Link from "next/link";

const articles = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [filter, setFilter] = useState("all");

  const handleClick = (e) => {
    setFilter(e.target.value);
  };

  const filteredItems =
    filter === "all"
      ? ArticlesData
      : ArticlesData.filter((item) => item.type === filter);

  return (
    <Layout
      title="Abdulmalik Adekunle | Articles"
      description="Abdulmalik Adekunle's Articles Page, Frontend Developer, Software Engineer"
      keywords="Frontend, Abdulmalik Adekunle"
    >
      <div className={styles.container}>
        <div className={styles.container}>
          <article className={styles.article}>
            <h1 className="intro__text">Articles & Reads.</h1> <br />
            <div className={styles.filter__links}>
              <button value="all" onClick={handleClick}>
                {" "}
                All
              </button>
              <button value="article" onClick={handleClick}>
                {" "}
                My Articles
              </button>
              <button value="reading" onClick={handleClick}>
                {" "}
                Reading
              </button>
            </div>
            <div className={styles.articles__container}>
              {filteredItems.map((item, index) => (
                <ArticleItem key={index} index={index} item={item} />
              ))}
            </div>
            <Link href="/contact">
              <p className={styles.p_link}>
                Are you convinced to contact me now? &rarr;
              </p>
            </Link>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default articles;
