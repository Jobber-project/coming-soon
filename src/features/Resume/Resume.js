import React from 'react'
import styled, { keyframes } from 'styled-components'

import Punchline from '../../components/Punchline'
import ResumeModelOne from '../../svg/cv-model-one.svg'
import { EASING } from '../app/constants'

const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0%);
  }
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1150px;
  margin: 0 auto;
  min-height: 100%;
`

const ResumeCol = styled.div`
  width: 60%;
`

const Figure = styled.figure`
  opacity: 0;
  transform: translateX(-100%);
  animation: ${slideInFromLeft} 2200ms ${EASING.easeOutExpo} forwards,
    ${fadeIn} 900ms 200ms linear forwards;

  & svg {
    width: 100%;
    max-width: 450px;
  }
`

const ContentCol = styled.div`
  width: 40%;
`

export default function Resume() {
  return (
    <Container>
      <ResumeCol>
        <Figure>
          <ResumeModelOne />
        </Figure>
      </ResumeCol>
      <ContentCol>
        <Punchline
          title="RUBRIK"
          header="Punchline"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie viverra sapien accumsan, feugiat."
        />
      </ContentCol>
    </Container>
  )
}
