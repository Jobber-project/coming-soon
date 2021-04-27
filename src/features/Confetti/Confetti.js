import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import Confetti from 'react-dom-confetti'

import Punchline from '../../components/Punchline'

const TITLE = 'JOBELLO'
const HEADER =
  'Du hittade till Sveriges första sociala jobbsajt för yrkesarbetare - välkommen! 🤩'
const PARAGRAPH =
  'Här kommer du kunna skapa ett CV i världsklass, nätverka med andra och söka bland Sveriges alla jobbannonser på ett nytt smart sätt. Självklart kommer allt att vara helt gratis. Häng på! 😃'
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
  elementCount: 500,
  dragFriction: 0.2,
  duration: 3000,
  stagger: 0,
  width: '20px',
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
      <Wrapper>
        <Confetti active={explosion} config={config} />
        <Punchline title={TITLE} header={HEADER} paragraph={PARAGRAPH} />
      </Wrapper>
    </Box>
  )
}
