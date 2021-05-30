import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'

import Portal from './Portal'

const animateIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(150%);
  }
  
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const animateOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }  

  100% {
    opacity: 0;
    transform: translateY(50%);
  }
`

const Wrapper = styled.div`
  z-index: 1;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  padding: 0 10px 30px;
  box-sizing: border-box;
  pointer-events: none;
`

const Container = styled.div`
  display: flex;
  background: #56bd66;
  box-sizing: border-box;
  padding: 15px 20px 13px;
  border-radius: 3px;
  pointer-events: auto;
  cursor: pointer;
  box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.25);
  animation: ${props =>
    props.$visible
      ? css`
          ${animateIn} 0.4s ease forwards
        `
      : css`
          ${animateOut} 1s ease-out forwards
        `};
`

const Left = styled.div`
  padding-right: 5px;
  flex-shrink: 0;
  box-sizing: border-box;
`

const Right = styled.div`
  flex-grow: 1;
`

const Text = styled.p`
  margin: 0;
  color: white;
  line-height: 1.25em;
`

export default function Toast({ children }) {
  const [isMounted, setIsMounted] = useState(false)

  const timerRef = useRef(null)
  const timeoutHandler = useRef(() => {
    setIsMounted(false)
  })

  useEffect(() => {
    setIsMounted(true)

    return () => {
      setIsMounted(false)
    }
  }, [])

  useEffect(() => {
    if (isMounted && timerRef.current === null) {
      timerRef.current = setTimeout(timeoutHandler.current, 10000)
    }

    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current)
      }
    }
  }, [isMounted])

  return (
    <Portal>
      <Wrapper>
        <Container $visible={isMounted} onClick={() => setIsMounted(false)}>
          <Left>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-circle-check"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="12" r="9" />
              <path d="M9 12l2 2l4 -4" />
            </svg>
          </Left>
          <Right>
            <Text>{children}</Text>
          </Right>
        </Container>
      </Wrapper>
    </Portal>
  )
}

Toast.propTypes = {
  children: PropTypes.node.isRequired,
}
