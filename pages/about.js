import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/About.module.css";
import Link from "next/link";

const About = () => {
  return (
    <Layout
      title="Abdulmalik Adekunle | About"
      description="Abdulmalik Adekunle's About Page, Frontend Developer, Software Engineer"
      keywords="Frontend, Abdulmalik Adekunle"
    >
      <div className={styles.container}>
        <div className={styles.container}>
          <article className={styles.article}>
            <h1 className="intro__text">About Me.</h1> <br />
            <ul className="timeline">
              <li className="mt-2">
                <p className={styles.p_head}>
                  <big>+</big> Engineering.{" "}
                </p>
                <p className={styles.p_first}>
                  First impressions matter in business, and a well-designed
                  website is essential to capitalize on them. An outstanding
                  website is assessed not just on its appearance but also on its
                  usability and functionality. My background as a programmer
                  enables me to create slick and aesthetically pleasing websites
                  while also coming up with clever solutions to technical
                  challenges. In addition to having in-depth knowledge of
                  accepted technical requirements and standards, I am familiar
                  with contemporary building techniques.
                </p>
              </li>
              <li>
                <p className={styles.p_head}>
                  <big>+</big> Design.{" "}
                </p>
                <p>
                  Despite the fact that I don&apos;t fit the mold of a
                  conventional designer, I have outstanding visual skills, which
                  make me a strong presenter and enable me to effectively convey
                  design concepts to stakeholders and design teams. I can
                  conceive and produce stunning products because of my great
                  conceptualization skills. Finally, you can usually find me
                  tinkering with stylesheets and developing fluid user
                  interfaces.
                </p>
              </li>
            </ul>
          </article>
          <article className={styles.article2}>
            <p className={styles.p_head}>
              <big>+</big> Technologies I work with.
            </p>

            <ul className={styles.techlist}>
              <li>React -</li>
              <li>Next.Js -</li>
              <li>Javascript -</li>
              <li>Typescript -</li>
              <li>NodeJs -</li>
              <li>Express -</li>
              <li>MongoDB -</li>
              <li>CSS -</li>
              <li>HTML -</li>
              <li>TailwindCSS -</li>
              <li>Gatsby </li>
            </ul>
          </article>
          <article className={styles.article2}>
            <p className={styles.p_head}>
              <big>+</big> My Reads & Courses.
            </p>
            <ul className="timeline">
              <li className={styles.lhead}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.lstyle}
                  aria-label="The Ultimate Typescript Course"
                  href="https://codewithmosh.com/p/the-ultimate-typescript"
                >
                  The Ultimate Typescript Course <small>Mosh</small>
                </a>
                <a className="float-right" tabIndex="-1">
                  <b>2020</b>
                </a>
              </li>
              <p>
                This is an intensive, hands-on learning course that focus on
                teaching Typescript in depth.It also shows how Typescript help
                boosts productivity and helps write more maintainable and robust
                code with fewer bugs.
              </p>

              <li className={styles.lhead}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.lstyle}
                  aria-label="Open Link Data Structure And Algorithm"
                  href="https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/"
                >
                  Data Structure And Algorithm. <small>Udemy</small>
                </a>
                <a className="float-right" tabIndex="-1">
                  <b>2021</b>
                </a>
              </li>
              <p>
                Many &quot;self-taught&quot; developers believe that one of
                their biggest disadvantages against college-educated computer
                science graduates is that they are unfamiliar with algorithms,
                data structures, and the infamous Big-O Notation.
              </p>
              <li className={styles.lhead}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.lstyle}
                  aria-label="Open Link Adaptive Leadership"
                  href="https://www.edx.org/course/adaptive-leadership-in-development"
                >
                  Adaptive Leadership. <small>edX</small>
                </a>
                <a className="float-right" tabIndex="-1">
                  <b>2021</b>
                </a>
              </li>
              <p>
                This introductory course helps you identify and make progress on
                a leadership challenge in your own life, team, or community.
                You’ll apply the tools and techniques of Adaptive Leadership, a
                practical framework developed at Harvard Kennedy School of
                Government for leading change, particularly during times of
                uncertainty or when there are no easy answers.{" "}
              </p>
              <li className={styles.lhead}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.lstyle}
                  aria-label="Open Link to Human Centered Design"
                  href="https://www.plusacumen.org/courses/introduction-human-centered-design"
                >
                  Human Centered Design 101.<small>Acumen</small>
                </a>
                <a className="float-right" tabIndex="-1">
                  <b>2020</b>
                </a>
              </li>
              <p>
                A thorough learning setup that will push you into the real world
                to talk to others and put your ideas to the test. You&apos;ll
                walk away from this event ready and energized to apply the
                human-centered design process to problems in a variety of
                businesses, sectors, and locations in order to develop
                game-changing ideas.
              </p>
              <li className={styles.lhead}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.lstyle}
                  aria-label="Open Link Learning to Learn [Efficient Learning] "
                  href="https://www.udemy.com/course/learning-to-learn-efficient-learning-zero-to-mastery/"
                >
                  Learning to Learn [Efficient Learning] <small>udemy</small>
                </a>
                <a className="float-right" tabIndex="-1">
                  <b>2020</b>
                </a>
              </li>
              <p>
                Improve memory & productivity using the skills of the
                world&apos;s top performers and learning strategies proven by
                research.
              </p>

              <li className={styles.lhead}>
                <Link href="/articles">Learning Something Great 😉</Link>
                <a className="float-right" tabIndex="-1">
                  <b>Currently</b>
                </a>
              </li>
              <p>We continue learning everyday. </p>
            </ul>
            <Link href="/projects">
              <p className={styles.p_link}>
                Let&apos;s continue to Projects &rarr;
              </p>
            </Link>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default About;
