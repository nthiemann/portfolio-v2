import * as React from "react";
import Layout from "../../components/layout";
import { graphql, HeadFC, PageProps } from "gatsby";
import Seo from "../../components/seo";

const BlogPost: React.FC<PageProps<Queries.BlogPostQuery>> = ({
  data,
  children,
}) => {
  return (
    <Layout pageTitle="Super Cool Blog Posts">
      {data?.mdx?.frontmatter?.date && <p>{data.mdx.frontmatter.date}</p>}
      {children}
    </Layout>
  );
};

export const query = graphql`
  query BlogPost($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;
export default BlogPost;

export const Head: HeadFC<Queries.BlogPostQuery> = ({ data }) => (
  <Seo title={data?.mdx?.frontmatter?.title ?? undefined} />
);
