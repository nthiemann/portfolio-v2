import * as React from "react";
import Layout from "../../components/layout";
import { graphql, PageProps } from "gatsby";

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
