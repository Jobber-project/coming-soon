import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import Background from './Background'
import Logo from './Logo'

const GlobalStyle = createGlobalStyle`
  ${reset}

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    width: 100%;
    height: 100%;
  }

  html {
    font-size: 10px;
  }

  body {
    font-size: 1.6rem;
    font-family: Roboto, sans-serif;
  }
`

const Head = styled.div`
  z-index: 2;
  position: relative;
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  height: 0;
  overflow: visible;
`

const LogoWrapper = styled.div`
  padding: 20px 20px 0;

  @media (min-width: 600px) {
    padding: 40px 40px 0;
  }
`

const Main = styled.main`
  z-index: 1;
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 62px;
  box-sizing: border-box;
`

export default function Layout({ title, children }) {
  return (
    <>
      <Helmet title={title} htmlAttributes={{ lang: 'sv' }}>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <Head>
        <LogoWrapper>
          <Link to="/">
            <Logo />
          </Link>
        </LogoWrapper>
      </Head>
      <Main>
        {children}
        <Background />
      </Main>
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

Layout.defaultProps = {
  title: undefined,
  children: null,
}
