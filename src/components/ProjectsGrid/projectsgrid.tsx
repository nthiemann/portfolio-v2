import React from "react";
import * as styles from "./projectsgrid.module.css";
import Typography from "../Typography/typography";
import Card from "../Card/card";
import {
  PythonGradientIcon,
  JavascriptGradientIcon,
  AwsGradientIcon,
  RaspberryPiGradientIcon,
  ReactGradientIcon,
  TerraformGradientIcon,
  GitGradientIcon,
  DjangoGradientIcon,
  DockerGradientIcon,
  HtmlGradientIcon,
  CssGradientIcon,
  GatsbyIcon,
  GraphQlIcon,
} from "../../assets/icons/index";

const cards = {
  "Smart home control app": {
    icons: [
      JavascriptGradientIcon,
      AwsGradientIcon,
      PythonGradientIcon,
      RaspberryPiGradientIcon,
    ],
    date: "May 2022",
    description:
      "Backend engineer. Managed AWS cloud services, wrote API endpoints in JavaScript, wrote Python scripts for embedded smart home control on Raspberry Pi.",
  },
  "Master data managent deployment": {
    icons: [
      AwsGradientIcon,
      PythonGradientIcon,
      ReactGradientIcon,
      TerraformGradientIcon,
    ],
    date: "December 2022",
    description:
      "Supported deployment of data aggregation solution and React site to AWS. Converted design to infrastructure as code with Terraform.",
  },
  "Python data quality metrics library": {
    icons: [PythonGradientIcon],
    date: "January 2023",
    description:
      "Wrote data metrics reporting library in Python; demoed for usage in client projects.",
  },
  "Data analytics platform": {
    icons: [
      ReactGradientIcon,
      JavascriptGradientIcon,
      PythonGradientIcon,
      AwsGradientIcon,
      GitGradientIcon,
      DjangoGradientIcon,
      DockerGradientIcon,
    ],
    date: "Present",
    description:
      "Fullstack engineer. Implemented various features, bugfixes, testing / QA improvements, gave frequent demos, worked with product team in agile sprint cycle. React, FastAPI, Django, AWS. Worked enterprise search, self-service workspace content management, access control refactors, and machine learning file analysis.",
  },
  "Portfolio site": {
    icons: [
      GatsbyIcon,
      ReactGradientIcon,
      JavascriptGradientIcon,
      HtmlGradientIcon,
      CssGradientIcon,
      GraphQlIcon,
    ],
    date: "Present",
    description:
      "(You are here!) Built a portfolio site with Gatsby framework + React. Utilized GraphQL for blog. Deployed on GitHub Pages.",
  },
};
/**
 * @description A showcase of projects I have worked on
 */
const ProjectsGrid: React.FC = () => {
  return (
    <div className={styles.cardGrid}>
      {Object.entries(cards).map(([key, value], _) => (
        <ProjectCard
          key={key}
          title={key}
          date={value.date}
          description={value.description}
          icons={value.icons}
        />
      ))}
    </div>
  );
};

interface ProjectCardProps {
  title: string;
  date?: string;
  description?: string;
  icons?: React.ComponentType[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  date,
  description,
  icons,
}) => {
  return (
    <Card>
      <div className={styles.projectCard}>
        <Typography variant="h3">{title}</Typography>
        {date && <Typography variant="h4">{`-> ${date}`}</Typography>}
        {icons && icons.map((Value, _) => <Value />)}
        {description && <Typography variant="p">{description}</Typography>}
      </div>
    </Card>
  );
};

export default ProjectsGrid;
