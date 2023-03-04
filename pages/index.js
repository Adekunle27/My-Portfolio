import styles from "../styles/Layout.module.css";
import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.0 }}
          className={styles.container}
        >
          <div className={styles.container}>
            <article className={styles.article}>
              <h1
                data-text="I'm Abdulmalik Adekunle"
                className={styles.intro__text}
              >
                <code> I&apos;m Abdulmalik Adekunle</code>
              </h1>
              <p>
                {" "}
                Frontend software engineer and technical writer passionate about
                creating dynamic, interactive and engaging web applications that
                bring value to businesses and their customers. With expertise in
                React, Next.js, Javascript, Typescript, Nodejs, CSS, HTML e.t.c.
              </p>
              <p>
                I&apos;m always on the lookout for exciting new technologies to
                explore and incorporate into my work, you can View my{" "}
                <Link href="/projects" className={styles.links}>
                  Projects
                </Link>
                ,{" "}
                <Link href="/articles" className={styles.links}>
                  Articles
                </Link>
                ,{" "}
                <Link href="/contact" className={styles.links}>
                  Contact Me
                </Link>
                , or send me an email at{" "}
                <Link
                  href={`mailto:malikabdulazeez27@gmail.com`}
                  className={styles.links}
                  style={{ cursor: "crosshair" }}
                  title="Copy to clipboard"
                  onClick={copyText}
                >
                  malikabdulazeez27@gmail.com
                </Link>
                .
              </p>
              <Link href="/about">
                <p className={styles.p_link}>See more about me &rarr;</p>
              </Link>
            </article>
          </div>
        </motion.div>
      </Layout>
    </div>
  );
}

// // const PageSection = styled.div`;
// //   min-height: calc(100vh - 39vh);
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   .intro__text {
// //     font-size: calc(var(--font-x-lg) + 9px);
// //     font-weight: 900;
// //     margin: 2rem 0rem 1.5rem;
// //     position: relative;
// //     letter-spacing: -1.1px;
// //     &::before,
// //     &::after {
// //       content: attr(data-text);
// //       position: absolute;
// //       top: 0;
// //       left: 0;
// //       width: 100%;
// //       height: 100%;
// //     }
// //     &::before {
// //       left: 2px;
// //       text-shadow: -1px 0 blue;
// //       animation: noise-anim-2 15s infinite linear alternate-reverse;
// //     }
// //     &::after {
// //       left: -2px;
// //       text-shadow: 3px 0 red;
// //       animation: noise-anim 2s infinite linear alternate-reverse;
// //     }
// //     @keyframes noise-anim {
// //       0% {
// //         clip-path: inset(29% 0 25% 0);
// //       }
// //       5% {
// //         clip-path: inset(9% 0 38% 0);
// //       }
// //       10% {
// //         clip-path: inset(96% 0 1% 0);
// //       }
// //       15% {
// //         clip-path: inset(75% 0 23% 0);
// //       }
// //       20% {
// //         clip-path: inset(46% 0 50% 0);
// //       }
// //       25% {
// //         clip-path: inset(3% 0 46% 0);
// //       }
// //       30% {
// //         clip-path: inset(82% 0 2% 0);
// //       }
// //       35% {
// //         clip-path: inset(88% 0 1% 0);
// //       }
// //       40% {
// //         clip-path: inset(91% 0 8% 0);
// //       }
// //       45% {
// //         clip-path: inset(96% 0 2% 0);
// //       }
// //       50% {
// //         clip-path: inset(59% 0 38% 0);
// //       }
// //       55% {
// //         clip-path: inset(41% 0 53% 0);
// //       }
// //       60% {
// //         clip-path: inset(21% 0 47% 0);
// //       }
// //       65% {
// //         clip-path: inset(89% 0 4% 0);
// //       }
// //       70% {
// //         clip-path: inset(1% 0 95% 0);
// //       }
// //       75% {
// //         clip-path: inset(86% 0 4% 0);
// //       }
// //       80% {
// //         clip-path: inset(95% 0 5% 0);
// //       }
// //       85% {
// //         clip-path: inset(54% 0 36% 0);
// //       }
// //       90% {
// //         clip-path: inset(70% 0 27% 0);
// //       }
// //       95% {
// //         clip-path: inset(6% 0 16% 0);
// //       }
// //       100% {
// //         clip-path: inset(95% 0 2% 0);
// //       }
// //     }
// //     @keyframes noise-anim-2 {
// //       0% {
// //         clip-path: inset(76% 0 21% 0);
// //       }
// //       5% {
// //         clip-path: inset(54% 0 7% 0);
// //       }
// //       10% {
// //         clip-path: inset(55% 0 29% 0);
// //       }
// //       15% {
// //         clip-path: inset(89% 0 3% 0);
// //       }
// //       20% {
// //         clip-path: inset(33% 0 40% 0);
// //       }
// //       25% {
// //         clip-path: inset(17% 0 56% 0);
// //       }
// //       30% {
// //         clip-path: inset(37% 0 51% 0);
// //       }
// //       35% {
// //         clip-path: inset(38% 0 19% 0);
// //       }
// //       40% {
// //         clip-path: inset(93% 0 4% 0);
// //       }
// //       45% {
// //         clip-path: inset(44% 0 14% 0);
// //       }
// //       50% {
// //         clip-path: inset(53% 0 26% 0);
// //       }
// //       55% {
// //         clip-path: inset(67% 0 11% 0);
// //       }
// //       60% {
// //         clip-path: inset(85% 0 13% 0);
// //       }
// //       65% {
// //         clip-path: inset(27% 0 37% 0);
// //       }
// //       70% {
// //         clip-path: inset(87% 0 4% 0);
// //       }
// //       75% {
// //         clip-path: inset(10% 0 8% 0);
// //       }
// //       80% {
// //         clip-path: inset(51% 0 27% 0);
// //       }
// //       85% {
// //         clip-path: inset(10% 0 60% 0);
// //       }
// //       90% {
// //         clip-path: inset(83% 0 3% 0);
// //       }
// //       95% {
// //         clip-path: inset(23% 0 55% 0);
// //       }
// //       100% {
// //         clip-path: inset(1% 0 81% 0);
// //       }
// //     }
// //   }
// //   p {
// //     font-size: calc(var(--font-sm) + 0.9px);
// //     line-height: 2.3;
// //     font-weight: 400;
// //     color: var(--article-color) !important;
// //   }
// //   button {
// //     font-size: var(--font-sm);
// //     background: var(--button-index);
// //     border: none;
// //     border-radius: 5px;
// //     transition: all 0.4s ease;
// //     padding: 1px 12px;
// //     &:hover {
// //       background: ${(props) => props.color};
// //       color: #fff;
// //     }
// //   }
// //   @media (max-width: 585px) {
// //     margin: 3rem 0;
// //     display: block;
// //     min-height: 100%;
// //   }
// //   @media (max-width: 989px) {
// //     margin: 3rem 0;
// //     display: block;
// //   }
// //   @media (max-width: 220px) {
// //     margin: 3rem 0;
// //     display: block;
// //     min-height: 100%;
// //   }
// //   @media (prefers-reduced-motion: reduce) {
// //     /* Stop the animation */

// //     .intro__text {
// //       animation: none;

// //       &::before,
// //       &::after {
// //         content: none;
// //       }
// //     }
// //   }
// `;
export default Home;
