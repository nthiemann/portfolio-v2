import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "./index.module.css";
import Typography from "../components/typography";
import Navbar from "../components/navbar";
import SkillChart from "../components/skillchart";
import ProjectsGrid from "../components/projectsgrid";
const TITLE = "Home";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <div className={styles.headerSection}>
        <Navbar />
        <div className={styles.container}>
          <Typography variant="h1">Nicholas Thiemann</Typography>
          <Typography variant="h2">Web Developer</Typography>
        </div>
      </div>
      <div className={styles.transition} />
      <div className={styles.section1}>
        <SkillChart />
        <ProjectsGrid />
      </div>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return (
    <>
      <Seo title={TITLE} />;
      <body className={styles.body} />
    </>
  );
};
