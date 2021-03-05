import React from 'react'
import PropTypes from 'prop-types'
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
`

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <LogoWrapper>
          <Logo />
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
  children: PropTypes.node,
}

Layout.defaultProps = {
  children: null,
}
