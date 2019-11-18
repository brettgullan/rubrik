module.exports = {
  siteMetadata: {
    title: 'Rubrik Design System',
    shortName: 'Rubrik',
    description: 'My site description',
  },
  plugins: [
    {
      resolve: '@primer/gatsby-theme-doctocat',
      options: {
        options: {
          repoRootPath: '../../',
        },
      },
    },
  ],
}
