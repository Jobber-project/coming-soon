module.exports = {
  plugins: [
    'gatsby-plugin-node-reload',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Jobelo',
        short_name: 'Jobelo',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-BD1NXEB34Z',
        head: true,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
        defer: true,
        cookieDomain: 'jobelo.se',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-no-index',
  ],
}
