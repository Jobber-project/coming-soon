import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Confetti from 'react-dom-confetti'

import Punchline from '../../components/Punchline'

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
    if (explosion) setExplosion(false)
  }, [explosion])
  return (
    <Box>
      <Wrapper
        onClick={() => {
          setExplosion(true)
        }}
      >
        <Confetti active={explosion} config={config} />
        <Punchline title="title" header="header" paragraph="paragraph" />
      </Wrapper>
    </Box>
  )
}
