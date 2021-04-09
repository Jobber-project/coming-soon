import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`

const Left = styled.div`
  flex-shrink: 0;
  padding-right: 5px;
`

const Right = styled.div`
  z-index: 1;
  position: relative;
  flex-grow: 1;
  padding: 18px 20px;
  box-sizing: border-box;
  max-width: 224px;
  border-radius: 20px 20px 20px 0px;
  background-color: #56bd66;

  &::after {
    z-index: 1;
    position: absolute;
    bottom: -1px;
    left: -1px;
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 17px 0 0 17px;
    border-color: transparent transparent transparent #56bd66;
    transform: skew(-10deg, -10deg);
  }
`

const LeftInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`

const Img = styled.img`
  z-index: 1;
  position: relative;
  top: 38px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 3px 4px 10px rgba(0, 0, 0, 0.25);
`

const Paragraph = styled.p`
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1em;
  color: white;
`

export default function Feedback({ img, comment }) {
  return (
    <Container>
      <Left>
        <LeftInner>
          <Img src={img} />
        </LeftInner>
      </Left>
      <Right>
        <Paragraph>{comment}</Paragraph>
      </Right>
    </Container>
  )
}

Feedback.propTypes = {
  img: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
}
