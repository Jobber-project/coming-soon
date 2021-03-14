import React, { useImperativeHandle, useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

import Portal from './Portal'

const backdropFadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

const backdropFadeOut = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`

const containerFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5) translateY(50px);
  }

  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`

const containerFadeOut = keyframes`
  0% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  
  100% {
    opacity: 0;
    transform: scale(0.8) translateY(50px);
  }
`

const Wrapper = styled.div`
  z-index: ${props => (props.$visible ? 2 : -1)};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  visibility: ${props => (props.$visible ? 'visible' : 'hidden')};
  pointer-events: ${props => (props.$visible ? 'auto' : 'none')};
  padding: 10px;
`

const Backdrop = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${props => (props.$closing ? backdropFadeOut : backdropFadeIn)}
    180ms ease-out;
`

const Container = styled.section`
  border-radius: 8px;
  background-color: white;
  max-height: 100%;
  box-sizing: border-box;
  animation: ${props => (props.$closing ? containerFadeOut : containerFadeIn)}
    180ms ease-out;
`

const Modal = React.forwardRef(({ labelledBy, className, children }, ref) => {
  const [visible, setVisible] = useState(false)
  const [closing, setClosing] = useState(false)

  const backdropRef = useRef(null)

  useImperativeHandle(ref, () => ({
    open: () => (visible ? undefined : setVisible(true)),
    close: () => (visible && !closing ? setClosing(true) : undefined),
    toggle: () => {
      if (visible && !closing) {
        setClosing(true)
      } else if (!visible && !closing) {
        setVisible(true)
      }
    },
  }))

  useEffect(() => {
    const { current: backdrop } = backdropRef

    function handleAnimationEnd() {
      setVisible(false)
      setClosing(false)
    }

    backdrop.addEventListener('animationend', handleAnimationEnd)

    return () => {
      backdrop.removeEventListener('animationend', handleAnimationEnd)
    }
  }, [closing])

  useEffect(() => {
    function handleEscape({ keyCode, key }) {
      if (
        visible &&
        !closing &&
        (keyCode === 27 || key === 'Escape' || key === 'Esc')
      ) {
        setClosing(true)
      }
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [closing, visible])

  return (
    <Portal>
      <Wrapper $visible={visible}>
        <Backdrop
          ref={backdropRef}
          key={`backdrop-${visible}-${closing}`}
          $closing={closing}
          onClick={visible && !closing ? () => setClosing(true) : undefined}
        />
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
        {visible && <div tabIndex={0} />}
        <Container
          key={`container-${visible}-${closing}`}
          $closing={closing}
          className={className}
          aria-labelledby={labelledBy}
          aria-modal="true"
        >
          {children}
        </Container>
      </Wrapper>
    </Portal>
  )
})

Modal.propTypes = {
  labelledBy: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}

Modal.defaultProps = {
  labelledBy: undefined,
  className: undefined,
  children: null,
}

export default Modal
