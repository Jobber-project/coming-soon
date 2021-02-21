import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

const Background = styled.div`
  background: linear-gradient(90deg, #775dfa 23.06%, #5a9ef5 98.75%);
  background-attachment: fixed;
  min-height: 100%;

  width: 100%;
  height: auto;

  position: fixed;
  top: 0;
  left: 0;
`

const PunchlineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 600px;
`

const Title = styled.h1`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 4rem;
  letter-spacing: 0.12em;
  margin: 0;

  color: #ffffff;
`

const Header = styled.h3`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 2.3rem;
  letter-spacing: 0.12em;
  margin: 0;

  color: #ffffff;
  margin-top: 20px;
`

const Paragraph = styled.p`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 1.2rem;
  text-align: center;
  line-height: 200%;
  margin: 0;

  color: #ffffff;
  margin-top: 30px;
`

function Punchline({ title, header, paragraph }) {
  return (
    <PunchlineWrapper>
      <Title>{title}</Title>
      <Header>{header}</Header>
      <Paragraph>{paragraph}</Paragraph>
    </PunchlineWrapper>
  )
}

Punchline.propTypes = {
  title: PropTypes.string,
  header: PropTypes.string,
  paragraph: PropTypes.string,
}

Punchline.defaultProps = {
  title: 'JOBELO',
  header: 'Punchline',
  paragraph:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie viverra sapien accumsan, feugiat.',
}

export default function IndexPage() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Background>
        <h1>Coming soon</h1>
        <Punchline />
      </Background>
    </>
  )
}
