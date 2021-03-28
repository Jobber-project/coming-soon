import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  max-width: 130px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 15px 14px 28px 8px rgba(0, 0, 0, 0.25);
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 12px 10px;
  box-sizing: border-box;
`

const Title = styled.p`
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.175em;
  letter-spacing: 0.12em;
  text-align: center;
`

const Paragraph = styled.p`
  font-size: 0.9rem;
  line-height: 1.25em;
  letter-spacing: 0.12em;
  text-align: center;
`

const ButtonWrapper = styled.div`
  z-index: 1;
  position: relative;
  left: -14px;
  padding-bottom: 14px;
`

const Button = styled.div`
  z-index: 1;
  position: relative;
  display: inline-block;
  padding: 12px 21px;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #354ebd;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 1.15em;
  text-align: center;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: white;
  cursor: default;
`

const Hand = styled.div`
  z-index: 1;
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 4.88rem;
  line-height: 1em;
  text-shadow: -5px 3px 8px rgba(0, 0, 0, 0.25);
  transform: rotate(-28.39deg);
`

export default function Generator() {
  return (
    <Container>
      <Content>
        <Title>Generator</Title>
        <Paragraph>
          Välj bland flera olika mallar & få fram din egna prägel
        </Paragraph>
      </Content>
      <ButtonWrapper>
        <Button>Byt</Button>
        <Hand>👆🏼</Hand>
      </ButtonWrapper>
    </Container>
  )
}
