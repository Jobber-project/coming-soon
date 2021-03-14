import React from 'react'
import styled from 'styled-components'

import Modal from '../../components/Modal'
import CloseIcon from '../../svg/close.svg'

const StyledModal = styled(Modal)`
  max-width: 390px;
  padding: 18px;
`

const Head = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
`

const Title = styled.h1`
  font-size: 16px;
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
  padding-top: 10px;
`

const Header = styled.h2`
  margin: 1.5em 0;
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 1.45em;
`

const Paragraph = styled.p`
  margin: 1.5em 0;
  font-size: 1.3rem;
  line-height: 1.45em;
`

const PrivacyPolicyModal = React.forwardRef((props, ref) => {
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
      <Body>
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
      </Body>
    </StyledModal>
  )
})

export default PrivacyPolicyModal
