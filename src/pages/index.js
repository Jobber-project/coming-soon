import React from 'react'
import styled from 'styled-components'

const Gradient = styled.div`
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
    <Gradient>
      <h1>Coming soon</h1>
    </Gradient>
  )
}
