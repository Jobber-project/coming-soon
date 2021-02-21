import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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
  text-align: center;
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

export default function Punchline({ title, header, paragraph }) {
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
