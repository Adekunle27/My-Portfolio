import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import styles from "../styles/Contact.module.css";

import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xoqzedvg");

  const router = useRouter();

  const handleClick = () => {
    router.replace("/sent");
  };

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
            <form method="POST" data-netlify="true" onSubmit={handleSubmit}>
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
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
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
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
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
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>
              <button type="submit" disabled={state.submitting}>
                <a
                  className={styles.btn}
                  type="submit"
                  aria-label="Send Message"
                  onClick={handleClick}
                >
                  Send Message
                </a>
              </button>
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

export default Contact;
