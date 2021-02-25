import React from 'react'
import styled from 'styled-components'

import WaveImg from '../images/wave.svg'

import DotSquare from './decoration/DotSquare'
import Waves from './decoration/Waves'

const Container = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(90deg, #775dfa 23.06%, #5a9ef5 98.75%);
  pointer-events: none;
  overflow: hidden;
`

const Inner = styled.div`
  z-index: 1;
  position: relative;
  width: 100%;
  height: 100%;
`

const Img = styled.img`
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export default function Background() {
  return (
    <Container aria-hidden="true">
      <Inner>
        <Img src={WaveImg} alt="gradient" />
        <DotSquare />
        <Waves />
      </Inner>
    </Container>
  )
}
