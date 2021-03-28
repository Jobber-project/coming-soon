import React from 'react'
import styled, { keyframes } from 'styled-components'

import Punchline from '../../components/Punchline'
import { EASING } from '../app/constants'

import Generator from './Generator'
import ResumeTemplate from './ResumeTemplate'

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
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 60%;
  padding-right: 200px;
  box-sizing: border-box;
`

const Figure = styled.figure`
  max-width: 450px;
  opacity: 0;
  transform: translateX(-100%);
  animation: ${slideInFromLeft} 2200ms ${EASING.easeOutExpo} forwards,
    ${fadeIn} 900ms 200ms linear forwards;
`

const ContentCol = styled.div`
  flex-shrink: 0;
  flex-basis: 40%;
`

const ResumeTemplateWrapper = styled.div`
  z-index: 1;
  position: relative;
`

const GeneratorWrapper = styled.div`
  z-index: 1;
  position: absolute;
  top: 70px;
  left: 100%;
  width: 130px;
  margin-left: -20px;
`

export default function Resume() {
  return (
    <Container>
      <ResumeCol>
        <Figure>
          <ResumeTemplateWrapper>
            <ResumeTemplate />
            <GeneratorWrapper>
              <Generator />
            </GeneratorWrapper>
          </ResumeTemplateWrapper>
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
