import React from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import Background from './Background'

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
