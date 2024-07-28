import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  pathPrefix: "portfolio-v2",
  siteMetadata: {
    title: `portfolio-v2`,
    siteUrl: `https://nthiemann.github.io/portfolio-v2/`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Jetbrains Mono`,
            file: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/assets/`, // See below to configure properly
        },
      },
    },

    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [
    //       {
    //         resolve: `gatsby-remark-embed-snippet`,
    //         options: {
    //           directory: `${__dirname}/blog/assets/snippets/`,
    //         },
    //       },
    //       {
    //         resolve: `gatsby-remark-prismjs`,
    //         options: {},
    //       },
    //     ],
    //   },
    // },
  ],
};

export default config;
