import * as React from "react";
import Layout from "../components/layout";
import { HeadFC, PageProps, graphql } from "gatsby";
import PostPreview from "../components/postpreview";
import Seo from "../components/seo";
import { background, cardcontainer } from "./blog.module.css";

const TITLE = "Blog Posts";

const BlogPage: React.FC<PageProps<Queries.BlogPageQuery>> = ({ data }) => {
  return (
    <Layout pageTitle={TITLE}>
      <div className={cardcontainer}>
        {data.allMdx.nodes.map((node) => (
          <PostPreview
            key={node.id}
            title={node.frontmatter?.title}
            date={node.frontmatter?.date}
            excerpt={node.excerpt}
            url={`/blog/${node.frontmatter?.slug}`}
          />
        ))}
      </div>
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
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export default BlogPage;

export const Head: HeadFC = () => {
  return (
    <>
      <Seo title={TITLE} />
      <body className={background} />;
    </>
  );
};
