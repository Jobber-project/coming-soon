import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
}

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

  max-width: 80%;
`

const Title = styled.h1`
  font-weight: bold;
  font-size: 4rem;
  letter-spacing: 0.12em;
  margin: 0;

  color: #ffffff;
  @media ${device.laptop} {
    font-size: 6.4rem;
  }
`

const Header = styled.h3`
  font-weight: bold;
  font-size: 2.5rem;
  text-align: center;
  letter-spacing: 0.12em;
  margin: 0;

  color: #ffffff;
  margin-top: 20px;

  @media ${device.laptop} {
    font-size: 3.6rem;
  }
`

const Paragraph = styled.p`
  font-weight: 300;
  font-size: 1.2rem;
  text-align: center;
  line-height: 200%;
  margin: 0;

  color: white;
  margin-top: 10px;
  @media ${device.laptop} {
    font-size: 1.6rem;
  }
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
  title: 'JOBELO',
  header: '',
  paragraph:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie viverra sapien accumsan, feugiat.',
  children: null,
}
