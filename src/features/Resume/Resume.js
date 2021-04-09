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
  flex-direction: column;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`

const ResumeCol = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 50%;
  padding: 0 15px;
  box-sizing: border-box;

  @media (min-width: 800px) {
    justify-content: flex-start;
  }
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

const PrimaryResumeTemplate = styled(ResumeTemplate)`
  z-index: 1;
  opacity: ${props => (props.$hidden ? 0 : 1)};
  transition: opacity 500m ease forwards;
`

const SecondaryResumeTemplate = styled(ResumeTemplate)`
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  animation: ${fadeIn} 500ms ease forwards;
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
  const [didChangeTheme, setDidChangeTheme] = useState(false)

  return (
    <Container>
      <Row>
        <ResumeCol>
          <Figure>
            <ResumeTemplateWrapper>
              <PrimaryResumeTemplate
                $hidden={didChangeTheme}
                themeName="primary"
              />
              {didChangeTheme && (
                <SecondaryResumeTemplate themeName="secondary" />
              )}
              <GeneratorWrapper>
                <Generator
                  onAnimationComplete={() => setDidChangeTheme(true)}
                />
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
