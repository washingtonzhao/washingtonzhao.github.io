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
        name: `outreach`,
        path: `${__dirname}/src/content/outreach`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `cursor`,
        path: `${__dirname}/src/content/cursor`,
      },
    },
    `gatsby-plugin-emotion`,`gatsby-transformer-remark`,],
}
