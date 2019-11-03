/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata : {
    title: "Scott Rowland Enock",
    author: "Scott Enock"
  },
  plugins : [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-catch-links",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/posts`,
        name: "posts"
      }
    }
  ]
}
