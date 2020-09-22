/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Washington Zhao`,
    siteUrl: `https://www.washingtonzhao.com`,
    description: `XD`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `software`,
        path: `${__dirname}/src/content/software`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `product`,
        path: `${__dirname}/src/content/product`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `teaching`,
        path: `${__dirname}/src/content/teaching`,
      },
    },
    `gatsby-plugin-emotion`,`gatsby-transformer-remark`,],
}
