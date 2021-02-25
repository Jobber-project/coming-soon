import React from 'react'
import { Helmet } from 'react-helmet'

import Navigator from '../feature/Navigator/Navigator'
import Layout from '../components/Layout'

export default function IndexPage() {
  return (
    <Layout>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Navigator />
    </Layout>
  )
}
