import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/Layout.module.css";
import { motion } from "framer-motion";

const sent = () => {
  return (
    <Layout
      title="Abdulmalik Adekunle | Contact"
      description="Abdulmalik Adekunle's Contact Page, Frontend Developer, Software Engineer"
      keywords="Frontend, Abdulmalik Adekunle"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.0 }}
        className={styles.container}
      >
        <div className={styles.container}>
          <article className={styles.article}>
            <h1 className="intro__text">Sent Successfully.</h1> <br />
            <p className={styles.p}>
              Your message has been sent successfully, You will soon recieve a
              response from me <br></br> <b>Thank you for your message ❤🙌</b>
            </p>
          </article>
        </div>
      </motion.div>
    </Layout>
  );
};

export default sent;
