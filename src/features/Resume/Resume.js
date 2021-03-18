import React from 'react'
import styled from 'styled-components'

import Punchline from '../../components/Punchline'
import ResumeModelOne from '../../svg/cv-model-one.svg'

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
