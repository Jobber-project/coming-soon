import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import Confetti from 'react-dom-confetti'

import Punchline from '../../components/Punchline'

const TITLE = 'JOBELO'
const HEADER = 'Du hittade till Sveriges första sociala jobbsajt🤩'
const PARAGRAPH =
  'Jobelo är platsen där du kan skapa ett CV i världsklass, söka bland Sveriges alla jobbannonser och diskutera yrkesfrågor som hur man nailar arbetsintervjun, hittar drömjobbet, löneförhandlar eller planerar den årliga firmafesten med mycket mer! Självklart är allt helt gratis. Häng på! 😃'
const TRANSITION = 500

const fadeIn = keyframes`
  from {
    transform: scale(.25);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`

const Box = styled.div`
  position: absolute;
  display: flex;
  flex: 1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} ${TRANSITION / 1000}s ease-out;
`

const config = {
  angle: 90,
  spread: 360,
  startVelocity: 50,
  elementCount: 300,
  dragFriction: 0.2,
  duration: 10000,
  stagger: 0,
  width: '15px',
  height: '10px',
  perspective: '500px',
  colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
}

export default function Welcome() {
  const [explosion, setExplosion] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setExplosion(true)
    }, TRANSITION - 150)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Box>
      <Wrapper
        onClick={() => {
          setExplosion(true)
        }}
      >
        <Confetti active={explosion} config={config} />
        <Punchline title={TITLE} header={HEADER} paragraph={PARAGRAPH} />
      </Wrapper>
    </Box>
  )
}
