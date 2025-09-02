import styles from "../styles/Layout.module.css";
import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const titleVariants = {
  hidden: {
    y: -100,
    opacity: 0,
    rotateX: -90,
  },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 1.2,
      type: "spring",
      bounce: 0.4,
    },
  },
};

const paragraphVariants = {
  hidden: {
    x: -100,
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 100,
    },
  },
};

const linkVariants = {
  hidden: {
    y: 50,
    opacity: 0,
    rotateY: -45,
  },
  visible: {
    y: 0,
    opacity: 1,
    rotateY: 0,
    transition: {
      duration: 0.6,
      type: "spring",
    },
  },
};

function Home() {
  const copyText = () => {
    const textField = document.createElement("textarea");
    textField.innerText = "malikabdulazeez27@gmail.com";
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  return (
    <div>
      <Layout>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={styles.container}
        >
          <div className={styles.container}>
            <motion.article
              className={styles.article}
              variants={containerVariants}
            >
              <motion.h1
                data-text="I'm Abdulmalik Adekunle"
                className={styles.intro__text}
                variants={titleVariants}
                whileHover={{
                  scale: 1.05,
                  textShadow: "0 0 20px rgba(102, 126, 234, 0.8)",
                  transition: { duration: 0.3 },
                }}
              >
                <code> I&apos;m Abdulmalik Adekunle</code>
              </motion.h1>
              <motion.p variants={paragraphVariants}>
                {" "}
                Frontend software engineer and technical writer passionate about
                creating dynamic, interactive and engaging web applications that
                bring value to businesses and their customers. With expertise in
                React, Next.js, Javascript, Typescript, Nodejs, CSS, HTML e.t.c.
              </motion.p>
              <motion.p variants={paragraphVariants}>
                I&apos;m always on the lookout for exciting new technologies to
                explore and incorporate into my work, you can view my{" "}
                <motion.span
                  whileHover={{ scale: 1.1, color: "rgba(102, 126, 234, 0.8)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/projects" className={styles.links}>
                    Projects
                  </Link>
                </motion.span>
                ,{" "}
                <motion.span
                  whileHover={{ scale: 1.1, color: "rgba(102, 126, 234, 0.8)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/articles" className={styles.links}>
                    Articles
                  </Link>
                </motion.span>
                ,{" "}
                <motion.span
                  whileHover={{ scale: 1.1, color: "rgba(102, 126, 234, 0.8)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/contact" className={styles.links}>
                    Contact Me
                  </Link>
                </motion.span>
                , or send me an email at{" "}
                <motion.span
                  whileHover={{
                    scale: 1.1,
                    color: "#ff6b6b",
                    textShadow: "0 0 10px rgba(255, 107, 107, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={`mailto:malikabdulazeez27@gmail.com`}
                    className={styles.links}
                    style={{ cursor: "crosshair" }}
                    title="Copy to clipboard"
                    onClick={copyText}
                  >
                    malikabdulazeez27@gmail.com
                  </Link>
                </motion.span>
                .
              </motion.p>
              <motion.div
                variants={linkVariants}
                whileHover={{
                  x: 10,
                  transition: { duration: 0.5 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/about">
                  <p className={styles.p_link}>See more about me &rarr;</p>
                </Link>
              </motion.div>
            </motion.article>
          </div>
        </motion.div>
      </Layout>
    </div>
  );
}

export default Home;
