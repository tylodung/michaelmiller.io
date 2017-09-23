module.exports = {
  siteMetadata: {
    title: 'Michael Miller',
    url: 'https://michaelmiller.io',
    description: 'Michael Miller is web enthusiast turned professional full stack developer.',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,  
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '',
      },
      
    },
  ],
};
