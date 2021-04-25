import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'

const animation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50%);
  }

  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`

const Container = styled.figure`
  transform: translateY(50%);
  opacity: 0;
  ${props =>
    css`
      animation: ${animation} 1s ease forwards;
      animation-delay: ${(props.index + 1) * 700}ms;
    `}
`

const PunchlineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 600px;
`

const Title = styled.h1`
  font-weight: bold;
  font-size: 6.4rem;
  letter-spacing: 0.12em;
  margin: 0;

  color: #ffffff;
`

const Header = styled.h3`
  font-weight: bold;
  font-size: 3.6rem;
  text-align: center;
  letter-spacing: 0.12em;
  margin: 0;

  color: #ffffff;
  margin-top: 20px;
`

const Paragraph = styled.p`
  font-weight: 300;
  font-size: 1.6rem;
  text-align: center;
  line-height: 200%;
  margin: 0;

  color: white;
  margin-top: 30px;
`

export default function Punchline({ title, header, paragraph, children }) {
  const content = [
    header ? <Header>{header}</Header> : null,
    paragraph ? <Paragraph>{paragraph}</Paragraph> : null,
    children ?? null,
  ]
  return (
    <PunchlineWrapper>
      <Title>{title}</Title>
      {content.filter(Boolean).map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Container key={index} index={index}>
          {item}
        </Container>
      ))}
    </PunchlineWrapper>
  )
}

Punchline.propTypes = {
  title: PropTypes.string,
  header: PropTypes.string,
  paragraph: PropTypes.string,
  children: PropTypes.node,
}

Punchline.defaultProps = {
  title: 'JOBELLO',
  header: '',
  paragraph:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie viverra sapien accumsan, feugiat.',
  children: null,
}
