module.exports = {
  siteMetadata: {
    title: `What's this? UωU`,
    description: `Every object-oriented Javascript developer's favourite game, guessing what "this" is in the current context.`,
    author: `@EmilienDurieu`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `media`,
        path: `${__dirname}/src/media`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `what-s-this-uwu`,
        short_name: `UwU`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#f7df1e`,
        display: `minimal-ui`,
        icon: `src/media/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `puzzles`,
        path: `${__dirname}/src/puzzles`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
