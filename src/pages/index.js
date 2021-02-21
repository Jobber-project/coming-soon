import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import Welcome from '../feature/Confetti/Confetti'
import EarlyBird from '../feature/EarlyBird/EarlyBird'

const Background = styled.div`
  background: linear-gradient(90deg, #775dfa 23.06%, #5a9ef5 98.75%);
  background-attachment: fixed;
  min-height: 100%;

  width: 100%;
  height: auto;

  position: fixed;
  top: 0;
  left: 0;
`

export default function IndexPage() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Background>
        <h1>Coming soon</h1>
        <EarlyBird />
      </Background>
    </>
  )
}
