import * as React from "react";
import Layout from "../components/layout";
import { PageProps, graphql } from "gatsby";
import PostPreview from "../components/postpreview";

const BlogPage: React.FC<PageProps<Queries.BlogPageQuery>> = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <PostPreview
          title={node?.frontmatter?.title}
          date={node.frontmatter?.date}
          excerpt={node.excerpt}
        />
      ))}
    </Layout>
  );
};

export const query = graphql`
  query BlogPage {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
      }
    }
  }
`;

export default BlogPage;
