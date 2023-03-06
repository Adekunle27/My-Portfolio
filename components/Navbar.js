import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";
import { motion } from "framer-motion";
import ClickAwayListener from "react-click-away-listener";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Projects", href: "/projects" },
  { text: "Articles", href: "/articles" },
  { text: "Contact", href: "/contact" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    // window.localStorage.setItem("theme", theme);
    // // localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ClickAwayListener onClickAway={() => setNavActive(null)}>
      <>
        <header className="headnavstyle">
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className={`nav`}
          >
            <Link href="/">
              <Image src="/malik.jpg" width="50" height="50" alt="Logo" />
            </Link>
            <div
              onClick={() => setNavActive(!navActive)}
              className={`nav__menu-bar`}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
            {/* <button style={{ padding: "0.9rem" }} onClick={toggleTheme}>
            Light
          </button> */}
            <div className={`${navActive ? "active" : ""} nav__menu-list`}>
              {MENU_LIST.map((menu, idx) => (
                <div
                  onClick={() => {
                    setActiveIdx(idx);
                    setNavActive(false);
                  }}
                  key={menu.text}
                >
                  <NavItem active={activeIdx === idx} {...menu} />
                </div>
              ))}
            </div>
          </motion.nav>
        </header>
      </>
    </ClickAwayListener>
  );
};

export default Navbar;
