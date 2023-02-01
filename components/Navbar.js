import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import styles from "../styles/Layout.module.css";

const Navbar = () => {
  return (
    <nav>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <div className={`${styles.container} ${styles.nav__container}`}>
            <Link href="/">
              <Image src="/malik.jpg" width="50" height="50" alt="Logo" />
            </Link>
            <ul className={styles.nav__menu}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/articles">Articles</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              {/* <Link href="/contact" legacyBehavior>
              <a aria-label="Go to Contact Page">
                <button type="button" tabIndex="-1">
                  Contact
                </button>
              </a>
              <Link/> */}
            </ul>

            <button id="open-menu">
              <i className="uil uil-bars"></i>
            </button>
            <button id="close-menu">
              <i className="uil uil-multiply"></i>
            </button>
          </div>
        </nav>
      </div>
    </nav>
  );
};

const Layout = styled.div``;

export default Navbar;
