import React, { useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { useForm } from 'react-hook-form'
import { gql, useMutation } from '@apollo/client'

import Punchline from '../../components/Punchline'

import PrivacyPolicyModal from './PrivacyPolicyModal'

const TITLE = 'JOBELLO'
const PARAGRAPH =
  'Lansering är nära! Vill du vara redo när det händer? Skriv in e-mail nedan och starta klockan i gröna knappen så hör vi oss när det är dags. 😎'
const TRANSITION = 500

const fadeIn = keyframes`
  from {
    transform: scale(.25);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`

const Box = styled.div`
  position: absolute;
  display: flex;
  flex: 1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} ${TRANSITION / 1000}s ease-out;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 23px;
  width: 320px;
`

const Email = styled.input`
  -webkit-appearance: none;
  outline: none;
  appearance: none;
  display: inline-flex;
  border: none;
  font-size: 1.6rem;
  color: inherit;

  height: 42px;
  padding-left: 42px;
  border-radius: 8px;

  &::placeholder {
    color: rgba(196, 196, 196, 0.5);
  }
`

const CheckboxWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Checkbox = styled.input`
  width: 16px;
  outline: none;
  height: 16px;
  border-radius: 4px;
`

const Label = styled.label`
  margin-left: 12px;
  color: ${p => (p.error ? '#FF0000' : '#ffffff')};
  user-select: none;
`

const Button = styled.button`
  -webkit-appearance: none;
  outline: none;
  appearance: none;
  display: inline-flex;
  border: none;
  color: inherit;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  background: #56bd66;
  border-radius: 8px;
  margin-top: 15px;
  transition: background 140ms ease-out;

  &:hover {
    background: #5ec36e;
  }

  &:active {
    background: #55b363;
  }
`

const ButtonText = styled(Label)`
  display: flex;
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  cursor: pointer;

  color: #ffffff;
`

const Error = styled.div`
  color: red;
  padding-bottom: 8px;
`

const Policy = styled.button`
  appearance: none;
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  font: inherit;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;

  display: inline-block;
  color: ${props => (props.error ? 'red' : 'white')};
  text-decoration: underline;
  cursor: pointer;
`

const CREATE_EARLYBIRD = gql`
  mutation addEarlybird($email: String!) {
    addEarlybird(email: $email)
  }
`

export default function EarlyBird() {
  const { register, handleSubmit, errors } = useForm()
  const [createUser] = useMutation(CREATE_EARLYBIRD)
  const [signup, setSignup] = useState('')

  const modalRef = useRef(null)

  async function handleEarlyBird({ email }) {
    if (signup === email) return
    try {
      await createUser({
        variables: { email },
      })
      setSignup(email)
    } catch (err) {
      // Random err
    }
  }

  return (
    <Box>
      <Wrapper>
        <Punchline title={TITLE} paragraph={PARAGRAPH}>
          <Form autoComplete="off" onSubmit={handleSubmit(handleEarlyBird)}>
            {errors?.email && (
              <Error>{errors?.email?.message || 'Ange E-postadress'}</Error>
            )}
            <Email
              placeholder="Ange e-postadress"
              type="input"
              ref={register({
                required: true,
                pattern: {
                  value: /[^@]+@[^@]+\w[^@]+/,
                  message: 'Ange en korrekt E-postadress',
                },
              })}
              name="email"
            />
            <CheckboxWrapper>
              <Checkbox
                type="checkbox"
                id="checkbox"
                ref={register({
                  required: true,
                })}
                ariaRequired="true"
                name="policy"
              />
              <Label htmlFor="checkbox" error={errors?.policy}>
                Jag godkänner&nbsp;
              </Label>
              <Policy
                id="privacy-policy"
                type="button"
                error={errors?.policy}
                onClick={() => modalRef.current?.toggle?.()}
              >
                villkoren
              </Policy>
            </CheckboxWrapper>

            <Button>
              <ButtonText>
                {signup ? 'Hörs snart! ⏰' : 'Följ oss redan idag!'}
              </ButtonText>
            </Button>
          </Form>
        </Punchline>
      </Wrapper>
      <PrivacyPolicyModal ref={modalRef} />
    </Box>
  )
}
