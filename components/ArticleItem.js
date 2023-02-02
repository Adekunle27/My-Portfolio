import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Articles.module.css";

export const ArticleItem = ({ item }) => {
  return (
    <div className={styles.articles__container}>
      <article className={styles.articles}>
        <a className={styles.card}>
          <div className={styles.article__image}>
            <Image
              className={styles.card}
              width={500}
              height={300}
              src={item.imageUrl}
              alt={item.title}
            />
          </div>
        </a>
        <div className={styles.article__info}>
          <h2 className={styles.p_head}>{item.title}</h2>
          <p>{item.description}</p>
          <div className={styles.links}>
            {/* {item.github && (
              <Link href={`${item.github}`} className={styles.btn__primary}>
                Code{" "}
              </Link>
            )} */}

            <Link href={`${item.link}`} className={styles.btn__primary}>
              Read
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArticleItem;
