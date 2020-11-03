module.exports = {
  siteMetadata: {
    title: `Test Gatsby app`,
    description: `prueba de concepto gatsby e integracuin continua`,
    author: `CAG`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://calm-crag-22353.herokuapp.com`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`agenda-pucps`,`facultad-artes`],
        //If using single types place them in this array.
        //singleTypes: [`home-page`, `contact`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        /* loginData: {
          identifier: "testUser",
          password: "Admin456",
        }, */
      },
    },
    
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
