import React, { useState } from 'react'
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

const Row = styled.div`
  display: flex;
`

const ResumeCol = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 50%;
  padding: 0 15px;
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
  display: flex;
  flex-shrink: 0;
  flex-basis: 50%;
  padding: 0 15px;
  box-sizing: border-box;
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
  const [theme, setTheme] = useState('primary')

  return (
    <Container>
      <Row>
        <ResumeCol>
          <Figure>
            <ResumeTemplateWrapper>
              <ResumeTemplate themeName={theme} />
              <GeneratorWrapper>
                <Generator onAnimationComplete={() => setTheme('secondary')} />
              </GeneratorWrapper>
            </ResumeTemplateWrapper>
          </Figure>
        </ResumeCol>
        <ContentCol>
          <Punchline
            title="CV"
            header="Enkelt, snabbt & smidigt"
            paragraph="Är du också trött på att det alltid skall krångel med att skriva ett CV? 😤 Vi med.
          Med Jobelos CV-generator får du istället fokusera på det som är viktigt, att nå ditt nästa jobb."
          />
        </ContentCol>
      </Row>
    </Container>
  )
}
