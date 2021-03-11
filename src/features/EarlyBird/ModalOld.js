import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ModalOldBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
`

const ModalOldOverlay = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
`

const ModalOldContent = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  max-width: 700px;
  padding: 10px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #ffffff;
`

const CrossButton = styled.button`
  position: absolute;
  appearance: none;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 20px;
`

const Content = styled.div``

const Title = styled.h1`
  font-weight: 500;
  font-size: 3.2rem;
  text-align: center;
`

const Text = styled.p`
  font-weight: 300;
  font-size: 1.6rem;
`

export default function ModalOld({ isVisible, toggle }) {
  return isVisible ? (
    <>
      <ModalOldBackground onClick={toggle} />
      <ModalOldOverlay>
        <ModalOldContent>
          <CrossButton type="button" aria-label="Close" onClick={toggle}>
            <div>&times;</div>
          </CrossButton>
          <Content>
            <Title>Privacy policy</Title>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              earum facilis, reiciendis at soluta libero et! Magnam consequuntur
              sit repellat quisquam voluptates amet sunt maiores. Deleniti cum
              sapiente ex illo?
            </Text>
          </Content>
        </ModalOldContent>
      </ModalOldOverlay>
    </>
  ) : null
}

ModalOld.propTypes = {
  isVisible: PropTypes.bool,
  toggle: PropTypes.func,
}

ModalOld.defaultProps = {
  isVisible: false,
  toggle: undefined,
}
