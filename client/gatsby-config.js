module.exports = {
  siteMetadata: {
    title: `Budget Tracker`,
    description: `A simple one page Budget Tracker`,
    author: `Richard Germaine`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`300`, `400`, `600`, `700`],
          },
        ],
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `product`,
        path: `${__dirname}/src/images/product`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    // {
    //   resolve: `gatsby-source-mongodb`,
    //   options: {
    //     dbName: `budget`,
    //     collection: [`myMoney`],
    //     server: {
    //       address: "cluster0-shard-00-01-wqjz0.mongodb.net",
    //       port: 27017,
    //     },
    //     auth: { user: "Alpha", password: "Password1" },
    //     extraParams: {
    //       replicaSet: `cluster0-shard-00-00-wqjz0`,
    //       ssl: true,
    //       authSource: `admin`,
    //       retryWrites: true,
    //     },
    //   },
    // },
  ],
}
