import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/Contact.module.css";

const contact = () => {
  return (
    <Layout
      title="Abdulmalik Adekunle | Contact"
      description="Abdulmalik Adekunle's Contact Page, Frontend Developer, Software Engineer"
      keywords="Frontend, Abdulmalik Adekunle"
    >
      <div className={styles.container}>
        <div className={styles.container}>
          <article className={styles.article}>
            <h1 className="intro__text">Contact Me.</h1> <br />
            <p className={styles.p}>
              Get in touch or shoot me an email on{" "}
              <b>malikabdulazeez27@gmail.com</b>
            </p>
            <br />
            <form method="POST" data-netlify="true" action="/sent">
              <div className="fields">
                <div className="field half">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="Name"
                    aria-required="true"
                    required
                  />
                </div>
                <div className="field half">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Email"
                    aria-required="true"
                    required
                  />
                </div>
                <div className="field">
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    className="form-control"
                    placeholder="Message"
                    aria-required="true"
                    required
                  />
                </div>
              </div>
              <a className={styles.btn} type="submit" aria-label="Send Message">
                Send Message
              </a>
            </form>
            <Link href="/">
              <p className={styles.p_link}>Go back home &rarr;</p>
            </Link>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default contact;
