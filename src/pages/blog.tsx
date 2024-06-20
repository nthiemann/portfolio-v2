import * as React from "react";
import Layout from "../components/layout";
import { PageProps, graphql } from "gatsby";

type BlogPageData = {
  allFile: {
    nodes: BlogNode[];
  };
};

type BlogNode = {
  name: string;
};

const BlogPage: React.FC<PageProps<BlogPageData>> = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
      <ul>
        {data.allFile.nodes.map((node: BlogNode) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default BlogPage;
