import React, { useImperativeHandle, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Portal from './Portal'

const Wrapper = styled.div`
  z-index: 1;
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
`

const Backdrop = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`

const Container = styled.section`
  border-radius: 8px;
  background-color: white;
`

const Modal = React.forwardRef(({ labelledBy, className, children }, ref) => {
  const [visible, setVisible] = useState(false)

  useImperativeHandle(ref, () => ({
    open: () => (visible ? undefined : setVisible(true)),
    close: () => (visible ? setVisible(false) : undefined),
    toggle: () => setVisible(prev => !prev),
  }))

  useEffect(() => {
    function handleEscape({ keyCode, key }) {
      if (visible && (keyCode === 27 || key === 'Escape' || key === 'Esc')) {
        setVisible(false)
      }
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [visible])

  return (
    <Portal>
      <Wrapper $visible={visible}>
        <Backdrop onClick={visible ? () => setVisible(false) : undefined} />
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
        {visible && <div tabIndex={0} />}
        <Container
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
