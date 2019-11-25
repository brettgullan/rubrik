module.exports = {
  plugins: [
    'gatsby-theme-docz',
    `gatsby-transformer-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Barlow`,
            variants: ['100','100i','200','200i','300','300i','400','400i','500','500i','600','600i','700','700i','800','800i','900','900i']
          },
        ],
      },
    }
  ],
}
