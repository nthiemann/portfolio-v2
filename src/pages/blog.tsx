import * as React from "react";
import Layout from "../components/Layout/layout";
import { HeadFC, PageProps, graphql } from "gatsby";
import PostPreview from "../components/PostPreview/postpreview";
import Seo from "../components/Seo/seo";
import * as styles from "./blog.module.css";
import { isFeatureToggled } from "../utils";
import Typography from "../components/Typography/typography";

const TITLE = "Blog Posts";

const BlogPage: React.FC<PageProps<Queries.BlogPageQuery>> = ({ data }) => {
  return (
    <Layout pageTitle={TITLE} maxWidth={"800px"}>
      {isFeatureToggled("blog_posts") ? (
        <div className={styles.cardcontainer}>
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
      ) : (
        <div className={styles.emptyState}>
          <Typography variant="h2">
            No posts to show right now. Come back later.
          </Typography>
        </div>
      )}
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
      <body className={styles.background} />;
    </>
  );
};
