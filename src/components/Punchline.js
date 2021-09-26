import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'

import Logo from './Logo'

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

const Header = styled.h3`
  font-weight: bold;
  font-size: 3.6rem;
  text-align: center;
  letter-spacing: 0.12em;
  margin: 0;
  line-height: 130%;

  color: #ffffff;
  margin-top: 30px;
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

export default function Punchline({ showLogo, header, paragraph, children }) {
  const content = [
    showLogo ? <Logo /> : null,
    header ? <Header>{header}</Header> : null,
    paragraph ? <Paragraph>{paragraph}</Paragraph> : null,
    children ?? null,
  ]
  return (
    <PunchlineWrapper>
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
  showLogo: PropTypes.bool,
  header: PropTypes.string,
  paragraph: PropTypes.string,
  children: PropTypes.node,
}

Punchline.defaultProps = {
  showLogo: false,
  header: '',
  paragraph: '',
  children: null,
}
