import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Project.module.css";

export const ProjectItem = ({ item }) => {
  return (
    <div className={styles.projects__container}>
      <article className={styles.projects}>
        <a className={styles.card}>
          <div className={styles.project__image}>
            <Image
              className={styles.card}
              width={500}
              height={300}
              src={item.imageUrl}
              alt={item.title}
            />
          </div>
        </a>
        <div className={styles.project__info}>
          <h2 className={styles.p_head}>{item.title}</h2>
          <p>{item.about}</p>
          <div className={styles.links}>
            {item.github && (
              <Link href={`${item.github}`} className={styles.btn__primary}>
                Code{" "}
              </Link>
            )}

            <Link href={`${item.link}`} className={styles.btn__primary}>
              Live
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};
