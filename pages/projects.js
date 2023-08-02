import React, { useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Project.module.css";
import { ProjectItem } from "../components/ProjectItem";
import projectsData from "../utils/ProjectsData";
import Link from "next/link";
import { motion } from "framer-motion";

const Projects = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [filter, setFilter] = useState("all");

  const handleClick = (e) => {
    setFilter(e.target.value);
  };

  const filteredItems =
    filter === "all"
      ? projectsData
      : projectsData.filter((item) => item.type === filter);

  return (
    <>
      <Layout
        title="Abdulmalik Adekunle | Projects"
        description="Abdulmalik Adekunle's Project Page, Frontend Developer, Software Engineer"
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
              <h1 className="intro__text"><code>Projects.</code></h1> <br />
              <div className={styles.filter__links}>
                <button value="all" onClick={handleClick}>
                  {" "}
                  All
                </button>
                <button value="projects" onClick={handleClick}>
                  {" "}
                  My Projects
                </button>
                <button value="others" onClick={handleClick}>
                  {" "}
                  Others
                </button>
              </div>
              <div className={styles.projects__container}>
                {filteredItems.map((item, index) => (
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
        </motion.div>
      </Layout>
    </>
  );
};

export default Projects;
