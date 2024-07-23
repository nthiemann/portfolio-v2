import * as React from "react";
import Layout from "../../components/Layout/layout";
import { graphql, HeadFC, PageProps } from "gatsby";
import Seo from "../../components/Seo/seo";
import Typography from "../../components/Typography/typography";
import BlogBodyEl from "../../components/BlogBodyEl/blogbodyel";

const BlogPost: React.FC<PageProps<Queries.BlogPostQuery>> = ({
  data,
  children,
}) => {
  return (
    <Layout pageTitle={data?.mdx?.frontmatter?.title ?? undefined}>
      {data?.mdx?.frontmatter?.date && (
        <Typography>{data.mdx.frontmatter.date}</Typography>
      )}
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
  <>
    <Seo title={data?.mdx?.frontmatter?.title ?? undefined} />
    <BlogBodyEl />
  </>
);
