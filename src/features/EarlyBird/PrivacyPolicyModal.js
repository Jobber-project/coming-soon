import React, { useRef } from 'react'
import styled from 'styled-components'

import Modal from '../../components/Modal'
import CloseIcon from '../../svg/close.svg'
import ChevronDown from '../../svg/chevron-down.svg'

const StyledModal = styled(Modal)`
  display: flex;
  flex-direction column;
  max-width: 390px;
  max-height: 484px;
  padding: 18px;
`

const Head = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 20px;
`

const CloseRow = styled.div`
  display: flex;
  justify-content: flex-end;
`

const TitleRow = styled.div`
  display: flex;
  flex-direction: column;
`

const CloseButton = styled.button`
  z-index: 1;
  position: relative;
  appearance: none;
  border: none;
  margin: 0;
  padding: 0 3px;
  width: auto;
  overflow: visible;
  background: transparent;
  font: inherit;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  cursor: pointer;

  &::after {
    content: '';
    z-index: -1;
    position: absolute;
    top: -15px;
    right: -15px;
    bottom: -15px;
    left: -15px;
  }
`

const Title = styled.h1`
  font-size: 14px;
  line-height: 1.15em;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-align: center;
`

const LastUpdate = styled.p`
  padding-top: 10px;
  font-size: 0.7rem;
  line-height: 1em;
  text-align: center;
  letter-spacing: 0.12em;
`

const Body = styled.div`
  padding: 0 17px;
  overflow: scroll;
`

const Header = styled.h2`
  margin: 1.5em 0;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.2em;

  &:first-of-type {
    margin-top: 0;
  }
`

const Paragraph = styled.p`
  margin: 1.5em 0;
  font-size: 1.2rem;
  line-height: 1.2em;
`

const Footer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 17px;

  &::before,
  &::after {
    content: '';
    flex-grow: 1;
    height: 1px;
    background-color: #c4c4c4;
    opacity: 0.5;
  }
`

const ScrollButtonWrapper = styled.div`
  padding: 0 15px;
`

const ScrollButton = styled.button`
  z-index: 1;
  position: relative;
  appearance: none;
  border: none;
  margin: 0;
  padding: 0 3px;
  width: auto;
  overflow: visible;
  background: transparent;
  font: inherit;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #775dfa;
`

const StyledChevronDown = styled(ChevronDown)`
  position: relative;
  top: 1px;
`

const PrivacyPolicyModal = React.forwardRef((props, ref) => {
  const scrollableRef = useRef(null)

  function handleScrollButtonClick() {
    scrollableRef.current?.scroll?.({
      top: scrollableRef.current.scrollHeight,
      behavior: 'smooth',
    })
  }

  return (
    <StyledModal ref={ref} labelledBy="privacy-policy">
      <Head>
        <CloseRow>
          <CloseButton
            type="button"
            aria-label="Stäng privacy policy-modal"
            onClick={() => ref?.current?.close?.()}
          >
            <CloseIcon />
          </CloseButton>
        </CloseRow>
        <TitleRow>
          <Title>Privacy Policy</Title>
          <LastUpdate>uppdaterad 2021-03-02</LastUpdate>
        </TitleRow>
      </Head>
      <Body ref={scrollableRef}>
        <Header>Rubrik</Header>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius amet
          morbi tortor purus orci, id. Nulla at consequat fermentum
          pellentesque. Cras ac et dolor nisl, ultricies varius amet. Justo,
          urna quis vestibulum, posuere adipiscing lacus, elementum, gravida.
          Quam maecenas egestas neque ut. Odio duis id nulla nisl bibendum nunc
          urna, elementum. Nec eget egestas suspendisse habitasse venenatis,
          donec nunc nec elit. Sit enim consectetur consectetur aenean a neque
          elementum.
        </Paragraph>
        <Header>Rubrik</Header>
        <Paragraph>
          Faucibus eu. Egestas at velit, turpis ut nunc, velit. Pellentesque
          morbi sed vestibulum tortor parturient. Ultrices viverra iaculis mi
          nullam. Morbi quis commodo erat eget quis cursus in aliquet. Id sed
          pharetra sodales metus, enim. Velit odio amet aenean in sed nam eget.
          Velit at phasellus bibendum arcu tortor suscipit aliquam. Sapien, ut
          libero habitasse fames blandit eget lorem habitasse.
        </Paragraph>
        <Header>Rubrik</Header>
        <Paragraph>
          Faucibus eu. Egestas at velit, turpis ut nunc, velit. Pellentesque
          morbi sed vestibulum tortor parturient. Ultrices viverra iaculis mi
          nullam. Morbi quis commodo erat eget quis cursus in aliquet. Id sed
          pharetra sodales metus, enim. Velit odio amet aenean in sed nam eget.
          Velit at phasellus bibendum arcu tortor suscipit aliquam. Sapien, ut
          libero habitasse fames blandit eget lorem habitasse.
        </Paragraph>
        <Header>Rubrik</Header>
        <Paragraph>
          Faucibus eu. Egestas at velit, turpis ut nunc, velit. Pellentesque
          morbi sed vestibulum tortor parturient. Ultrices viverra iaculis mi
          nullam. Morbi quis commodo erat eget quis cursus in aliquet. Id sed
          pharetra sodales metus, enim. Velit odio amet aenean in sed nam eget.
          Velit at phasellus bibendum arcu tortor suscipit aliquam. Sapien, ut
          libero habitasse fames blandit eget lorem habitasse.
        </Paragraph>
        <Header>Rubrik</Header>
        <Paragraph>
          Faucibus eu. Egestas at velit, turpis ut nunc, velit. Pellentesque
          morbi sed vestibulum tortor parturient. Ultrices viverra iaculis mi
          nullam. Morbi quis commodo erat eget quis cursus in aliquet. Id sed
          pharetra sodales metus, enim. Velit odio amet aenean in sed nam eget.
          Velit at phasellus bibendum arcu tortor suscipit aliquam. Sapien, ut
          libero habitasse fames blandit eget lorem habitasse.
        </Paragraph>
        <Header>Rubrik</Header>
        <Paragraph>
          Faucibus eu. Egestas at velit, turpis ut nunc, velit. Pellentesque
          morbi sed vestibulum tortor parturient. Ultrices viverra iaculis mi
          nullam. Morbi quis commodo erat eget quis cursus in aliquet. Id sed
          pharetra sodales metus, enim. Velit odio amet aenean in sed nam eget.
          Velit at phasellus bibendum arcu tortor suscipit aliquam. Sapien, ut
          libero habitasse fames blandit eget lorem habitasse.
        </Paragraph>
      </Body>
      <Footer>
        <ScrollButtonWrapper>
          <ScrollButton
            type="button"
            aria-label="Scrolla nedåt i privacy policy-modal"
            onClick={handleScrollButtonClick}
          >
            <StyledChevronDown />
          </ScrollButton>
        </ScrollButtonWrapper>
      </Footer>
    </StyledModal>
  )
})

export default PrivacyPolicyModal
