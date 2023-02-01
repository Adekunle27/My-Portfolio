import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/Project.module.css";
import { ProjectItem } from "../components/ProjectItem";
import projectsData from "../utils/ProjectsData";
import Link from "next/link";

const Projects = () => {
  return (
    <Layout
      title="Abdulmalik Adekunle | Projects"
      description="Abdulmalik Adekunle's Project Page, Frontend Developer, Software Engineer"
      keywords="Frontend, Abdulmalik Adekunle"
    >
      <div className={styles.container}>
        <div className={styles.container}>
          <article className={styles.article}>
            <h1 className="intro__text">Projects.</h1> <br />
            <div className={styles.projects__container}>
              {projectsData.map((item, index) => (
                <ProjectItem key={index} index={index} item={item} />
              ))}
            </div>
            <Link href="/articles">
              <p className={styles.p_link}>
                Let&apos;s continue to Articles &rarr;
              </p>
            </Link>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
