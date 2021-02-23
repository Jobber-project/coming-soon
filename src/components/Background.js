import React from 'react'
import styled from 'styled-components'

import WavesImg from '../images/waves.svg'

const Container = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(90deg, #775dfa 23.06%, #5a9ef5 98.75%);
  pointer-events: none;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export default function Background() {
  return (
    <Container aria-hidden="true">
      {/* <Img src={WavesImg} alt="" /> */}
    </Container>
  )
}
