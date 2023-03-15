import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/Admin.module.css";
import { motion } from "framer-motion";

const admin = () => {
  const handleSubmit = () => {};
  const handleClick = () => {};
  return (
    <>
      <Layout
        title="Abdulmalik Adekunle | Articles"
        description="Abdulmalik Adekunle's Articles Page, Frontend Developer, Software Engineer"
        keywords="Frontend, Abdulmalik Adekunle"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.0 }}
          className={styles.container}
        ></motion.div>
        <div className={styles.container}>
          <article className={styles.article}>
            <h1 className="intro__text">Admin.</h1> <br />
            <form method="POST" onSubmit={handleSubmit}>
              <div className="fields">
                <div className="field half">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="Username"
                    aria-required="true"
                    required
                  />
                </div>
                <div className="field half">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="Password"
                    aria-required="true"
                    required
                  />
                </div>
              </div>
              <button type="submit">
                <a className={styles.btn} type="submit" onClick={handleClick}>
                  Login
                </a>
              </button>
            </form>
          </article>
        </div>
      </Layout>
    </>
  );
};

export default admin;
