import React from 'react'
import styled from 'styled-components'

import Punchline from '../../components/Punchline'

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`

export default function Confetti() {
  return (
    <Wrapper>
      <Punchline title="title" header="header" paragraph="paragraph" />
    </Wrapper>
  )
}
