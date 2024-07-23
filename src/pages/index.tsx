import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Seo from "../components/Seo/seo";
import * as styles from "./index.module.css";
import Typography from "../components/Typography/typography";
import Navbar from "../components/Navbar/navbar";
import SkillChart from "../components/SkillChart/skillchart";
import ProjectsGrid from "../components/ProjectsGrid/projectsgrid";
import TechBucket from "../components/techbucket/techbucket";
import { isFeatureToggled } from "../utils";
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
      {isFeatureToggled("tech_bucket") && (
        <div className={styles.section1}>
          <TechBucket />
        </div>
      )}
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
