module.exports = {
  siteMetadata: {
    title: 'julienbovet.com',
    author: 'Julien Bovet',
    description: 'From odd measures to data analytics.',
    siteUrl: 'https://julienbovet.com',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options:{
      }
    },
    {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: "julienbovet.com",
      short_name: "julienbovet",
      start_url: "/",
      background_color: "#ffffff",
      theme_color: "#4078c0",
      display: "minimal-ui",
      icon: "static/sharepic.jpg", // This path is relative to the root of the site.
    },
  },
    {
      resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/static`,
        name: 'static',
      },
    },
    {
      resolve: `@andrew-codes/gatsby-plugin-elasticlunr-search`,
        options: {
          fields: [
            'title',
            'tags',
            'content',
            'subtitle'
          ],
          resolvers: {
            MarkdownRemark: {
              title: node => node.frontmatter.title,
              subtitle: node => node.frontmatter.subtitle,
              tags: node => node.frontmatter.tags,
              content: node => node.internal.content,
            },
          },
        },
      },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-WCB23D",
        includeInDevelopment: true,
      },
    },
    `gatsby-plugin-feed`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    `gatsby-plugin-netlify`
  ],
}
