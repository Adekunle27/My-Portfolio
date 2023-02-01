import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/Layout.module.css";

const sent = () => {
  return (
    <Layout
      title="Abdulmalik Adekunle | Contact"
      description="Abdulmalik Adekunle's Contact Page, Frontend Developer, Software Engineer"
      keywords="Frontend, Abdulmalik Adekunle"
    >
      <div className={styles.container}>
        <div className={styles.container}>
          <article className={styles.article}>
            <h1 className="intro__text">Sent Successfully.</h1> <br />
            <p className={styles.p}>
              Your message has been sent successfully, You will soon recieve a
              response from me <br></br> <b>Thank you for your message ❤🙌</b>
            </p>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default sent;
