import React from "react";
import styles from "../styles/Footer.module.css";

import { IconRight, Twitter, Facebook, Linkedin, Github } from "./Icons";

const Footer = () => {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <a
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Adekunle27"
          aria-label="Go To Abdulmalik Adekunle's Github Page"
          title="Github Page"
        >
          <Github />
        </a>
        <a
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://linkedin.com/in/abdulmalik-adekunle"
          aria-label="Go To Abdulmalik Adekunle's Linkedin Page"
          title="Linkedin Page"
        >
          <Linkedin />
        </a>
        <a
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/Localhost_5000"
          aria-label="Go To Abdulmalik Adekunle's Twitter Page"
          title="Twitter Page"
        >
          <Twitter />
        </a>
        <a
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://web.facebook.com/malik.azeez.3114935"
          aria-label="Go To Abdulmalik Adekunle's Facebook Page"
          title="Facebook Page"
        >
          <Facebook />
        </a>
      </footer>
    </div>
  );
};

export default Footer;
