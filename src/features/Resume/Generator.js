import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, css } from 'styled-components'

import AvatarOne from '../../images/feedback-avatar-one.png'
import AvatarTwo from '../../images/feedback-avatar-two.png'
import AvatarThree from '../../images/feedback-avatar-three.png'
import Checkmark from '../../svg/checkmark.svg'

const flip = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50%) rotateY(180deg);
  }
  
  50% {
    opacity: 1;
  }
  
  100% {
    opacity: 1;
    transform: translateX(0%) rotateY(0deg);
  }
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

const moveToGeneratorButton = keyframes`
  0% {
    transform: translate(30px, 20px) rotate(-28.39deg);
  }

  100% {
    transform: translate(0px, 0px) rotate(-28.39deg);
  }
`

const moveToInviteButton = keyframes`
  0% {
    transform: translate(0px, 0px) rotate(-28.39deg);
  }

  100% {
    transform: translate(20px, 10px) rotate(-28.39deg);
  }
`

const pressGenerate = keyframes`
  0% {
    transform: translateY(0px) rotate(-28.39deg);
  }
  
  50% {
    transform: translateY(5px) rotate(-28.39deg);
  }
  
  100% {
    transform: translateY(0px) rotate(-28.39deg);
  }
`

const pressInvite = keyframes`
  0% {
    transform: translate(20px, 10px) translateY(0px) rotate(-28.39deg);
  }
  
  50% {
    transform: translate(20px, 10px) translateY(5px) rotate(-28.39deg);
  }
  
  100% {
    transform: translate(20px, 10px) translateY(0px) rotate(-28.39deg);
  }
`

const moveToCheck = keyframes`
  0% {
    transform: translate(20px, 10px) rotate(-28.39deg);
  }
  
  100% {
    transform: translate(50px, 10px) rotate(0deg);
  }
  `

const pressCheck = keyframes`
  0% {
    transform: translate(50px, 10px);
  }
  
  50% {
    transform: translate(50px, 15px);
  }

  0% {
    transform: translate(50px, 10px);
  }
`

const background = keyframes`
  0% {
    background-color: #354ebd;
  }
  
  50% {
    background-color: #3046ab
  }

  100% {
    background-color: #354ebd;
  }
`

const shrink = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }
  
  25% {
    opacity: 0.75;
    transform: scale(1.25);
  }
  
  50% {
    transform: scale(0.5);
  }
  
  75% {
    opacity: 0.25;
    transform: scale(0.25);
  }
  
  100% {
    opacity: 0;
    transform: scale(0);
  }
`

const Container = styled.div`
  z-index: 1;
  position: relative;
  opacity: 1;
  transform: scale(1);
  transform-origin: bottom left;
  animation: ${props =>
    props.$hide
      ? css`
          ${shrink} 500ms 800ms ease-out forwards
        `
      : 'none'};
`

const Inner = styled.div`
  z-index: 1;
  position: relative;
  width: 100%;
  max-width: 130px;
  background-color: white;
  border-radius: 20px;
  opacity: 0;
  box-shadow: 15px 14px 28px 8px rgba(0, 0, 0, 0.25);
  transform: translateX(-50%) rotateY(180deg);
  transform-style: preserve-3d;
  animation: ${flip} 800ms ${props => (props.$generator ? 2 : 0)}s ease-out
    forwards;

  &::before,
  &::after {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 20px;
    background-color: white;
  }

  &::after {
    background-color: white;
    transform: translateZ(-1px);
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 12px 10px;
  box-sizing: border-box;
`

const Title = styled.p`
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.175em;
  letter-spacing: 0.12em;
  text-align: center;
`

const Paragraph = styled.p`
  font-size: 0.9rem;
  line-height: 1.25em;
  letter-spacing: 0.12em;
  text-align: center;
`

const ButtonWrapper = styled.div`
  z-index: 1;
  position: relative;
  left: -14px;
  padding-bottom: 14px;
`

const Button = styled.div`
  z-index: 1;
  position: relative;
  display: inline-block;
  padding: 12px 21px;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #354ebd;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 1.15em;
  text-align: center;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: white;
  cursor: default;
  animation: ${background} 280ms 4s ease forwards;
`

const FeedbackButton = styled(Button)`
  animation: ${background} 280ms 1500ms ease forwards;
`

const Hand = styled.div`
  z-index: 1;
  position: absolute;
  bottom: -10px;
  left: 40px;
  font-size: 4.88rem;
  line-height: 1em;
  opacity: 0;
  text-shadow: -5px 3px 8px rgba(0, 0, 0, 0.25);
  transform: translate(30px, 20px) rotate(-28.39deg);
  animation: ${fadeIn} 300ms 3s linear forwards,
    ${moveToGeneratorButton} 800ms 3s ease-out forwards,
    ${pressGenerate} 200ms 4s linear forwards;
`

const FeedbackHand = styled(Hand)`
  opacity: 1;
  transform: translate(0px, 0px) rotate(-28.39deg);
  animation: ${moveToInviteButton} 400ms 1s ease-out forwards,
    ${pressInvite} 200ms 1500ms linear forwards;
`

const InviteHand = styled(FeedbackHand)`
  opacity: ${props => (props.$hide ? 0 : 1)};
  transform: translate(20px, 10px) rotate(-28.39deg);
  transition: opacity 400ms 800ms ease-out;
  animation: ${moveToCheck} 600ms 2s ease-out forwards,
    ${pressCheck} 200ms 2500ms linear forwards;
`

const Invite = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 15px 18px;
`

const Avatars = styled.div`
  display: flex;
`

const Avatar = styled.img`
  z-index: 1;
  position: relative;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;

  & + & {
    margin-left: -7px;
  }
`

const Check = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background-color: ${props => (props.$checked ? '#56bd66' : '#c4c4c4')};
  transition: background-color 500ms ease-out;

  &::before {
    content: '';
    z-index: 1;
    position: absolute;
    top: 1px;
    right: 1px;
    bottom: 1px;
    left: 1px;
    display: ${props => (props.$checked ? 'none' : 'block')};
    border-radius: 3px;
    background-color: white;
    overflow: hidden;
  }

  & svg {
    opacity: ${props => (props.$checked ? 1 : 0)};
    transform: rotate(${props => (props.$checked ? 0 : -20)}deg);
    transition: opacity 450ms, transform 300ms 300ms;
  }
`

const STEP = {
  generator: 'generator',
  feedback: 'feedback',
  invite: 'invite',
}

export default function Generator({ onAnimationComplete }) {
  const [step, setStep] = useState(STEP.generator)
  const [invited, setInvited] = useState(false)

  const inviteAnimIteration = useRef(0)

  function handleAnimationEnd() {
    switch (step) {
      case STEP.generator:
        setStep(STEP.feedback)
        onAnimationComplete()
        break

      case STEP.feedback:
        setStep(STEP.invite)
        break

      case STEP.invite:
        if (inviteAnimIteration.current === 1) {
          setInvited(true)
        } else {
          inviteAnimIteration.current += 1
        }
        break

      default:
        break
    }
  }

  function title() {
    switch (step) {
      case STEP.feedback:
      case STEP.invite:
        return 'Feedback'

      default:
        return 'Generator'
    }
  }

  function paragraph() {
    switch (step) {
      case STEP.feedback:
      case STEP.invite:
        return 'Få respons av vänner & famlj direkt i CV:et'

      default:
        return 'Välj bland flera olika mallar & få fram din egna prägel'
    }
  }

  function button() {
    switch (step) {
      case STEP.feedback:
      case STEP.invite:
        return 'Bjud in'

      default:
        return 'Byt'
    }
  }

  const generator = step === STEP.generator

  return (
    <Container $hide={invited}>
      <Inner key={generator} $generator={generator}>
        <Content>
          <Title>{title()}</Title>
          <Paragraph>{paragraph()}</Paragraph>
        </Content>
        {(() => {
          switch (step) {
            case STEP.feedback:
              return (
                <ButtonWrapper>
                  <FeedbackButton onAnimationEnd={handleAnimationEnd}>
                    {button()}
                  </FeedbackButton>
                </ButtonWrapper>
              )

            case STEP.invite:
              return (
                <Invite>
                  <Avatars>
                    <Avatar src={AvatarOne} />
                    <Avatar src={AvatarTwo} />
                    <Avatar src={AvatarThree} />
                  </Avatars>
                  <Check $checked={invited}>
                    <Checkmark />
                  </Check>
                </Invite>
              )

            default:
              return (
                <ButtonWrapper>
                  <Button onAnimationEnd={handleAnimationEnd}>
                    {button()}
                  </Button>
                </ButtonWrapper>
              )
          }
        })()}
      </Inner>
      {(() => {
        switch (step) {
          case STEP.feedback:
            return <FeedbackHand>👆🏼</FeedbackHand>

          case STEP.invite:
            return (
              <InviteHand $hide={invited} onAnimationEnd={handleAnimationEnd}>
                👆🏼
              </InviteHand>
            )

          default:
            return <Hand>👆🏼</Hand>
        }
      })()}
    </Container>
  )
}

Generator.propTypes = {
  onAnimationComplete: PropTypes.func.isRequired,
}
