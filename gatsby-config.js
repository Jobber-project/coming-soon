module.exports = {
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-node-reload',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Jobello',
        short_name: 'Jobello',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-Y93WFG5F08'],
        gtagConfig: {
          anonymize_ip: true,
        },
        pluginConfig: {
          respectDNT: true,
        },
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-no-index',
    'gatsby-plugin-portal',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg\/.*\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: 'https://dev-jobber-api-l.azurewebsites.net/graphql',
      },
    },
  ],
}
