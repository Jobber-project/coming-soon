import React from 'react'
import styled, { keyframes } from 'styled-components'

import Punchline from '../../components/Punchline'

const TITLE = 'Nätverka'
const HEADER = 'Punchline'
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

export default function CommunityTalk() {
  return (
    <Box>
      <Wrapper>
        <Punchline title={TITLE} header={HEADER} paragraph={PARAGRAPH} />
      </Wrapper>
    </Box>
  )
}
