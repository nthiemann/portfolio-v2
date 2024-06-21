import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { body } from "./index.module.css";
import Typography from "../components/typography";
const TITLE = "Home";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Typography variant="h1">Nicholas Thiemann</Typography>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return (
    <>
      <Seo title={TITLE} />;
      <body className={body} />
    </>
  );
};
