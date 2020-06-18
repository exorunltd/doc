module.exports = {
  siteMetadata: {
    siteTitle: `Exorun Docs`,
    defaultTitle: `Exorun Docs`,
    siteTitleShort: `Exorun Docs`,
    siteDescription: `Exorun Documentation`,
    siteUrl: `https://docs.exorun.io`,
    siteAuthor: `@exorunltd`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#7159c1`,
    basePath: `/`,
    footer: ``,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/exorunltd/doc`,
        baseDir: ``,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://docs.exorun.io`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
