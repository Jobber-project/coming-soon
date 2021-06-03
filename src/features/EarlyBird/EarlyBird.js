import React, { useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { useForm } from 'react-hook-form'
import { gql, useMutation } from '@apollo/client'

import Punchline from '../../components/Punchline'
import Toast from '../../components/Toast'

import PrivacyPolicyModal from './PrivacyPolicyModal'

const HEADER = 'Snart går vi live! 🚀'
const PARAGRAPH = 'Skriv in e-mail nedan så hör vi av oss när det är dags.'
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
  width: 100%;
  max-width: 400px;
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

  ::-webkit-input-placeholder {
    font-style: italic;
  }
  :-moz-placeholder {
    font-style: italic;
  }
  ::-moz-placeholder {
    font-style: italic;
  }
  :-ms-input-placeholder {
    font-style: italic;
  }
`

const CheckboxWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
`

const Checkbox = styled.input`
  width: 16px;
  outline: none;
  height: 16px;
  border-radius: 4px;
`

const Label = styled.label`
  line-height: normal;
  margin-left: 12px;
  font-size: 1.4rem;
  line-height: 1.375em;
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

// const Policy = styled.button`
//   appearance: none;
//   border: none;
//   margin: 0;
//   padding: 0;
//   width: auto;
//   overflow: visible;
//   background: transparent;
//   font: inherit;
//   -webkit-font-smoothing: inherit;
//   -moz-osx-font-smoothing: inherit;

//   display: inline-block;
//   color: ${props => (props.error ? 'red' : 'white')};
//   text-decoration: underline;
//   cursor: pointer;
// `

const CREATE_EARLYBIRD = gql`
  mutation addEarlybird($email: String!) {
    addEarlybird(email: $email)
  }
`

export default function EarlyBird() {
  const { register, handleSubmit, errors, reset } = useForm()
  const [createUser] = useMutation(CREATE_EARLYBIRD)
  const [success, setSuccess] = useState(false)

  const modalRef = useRef(null)

  async function handleEarlyBird({ email }) {
    try {
      setSuccess(false)
      await createUser({
        variables: { email },
      })
      setSuccess(true)
      reset()
    } catch (err) {
      setSuccess(false)
    }
  }

  return (
    <Box>
      <Wrapper>
        <Punchline header={HEADER} paragraph={PARAGRAPH}>
          <Form autoComplete="off" onSubmit={handleSubmit(handleEarlyBird)}>
            {errors?.email && (
              <Error>{errors?.email?.message || 'Ange E-postadress'}</Error>
            )}
            <Email
              placeholder="din@e-mail.se"
              type="input"
              ref={register({
                required: true,
                pattern: {
                  value: /[^@]+@[^@]+\w[^@]+/,
                  message: 'Ange en korrekt e-postadress',
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
                Jag godkänner att Jobello kan kontakta mig via e-mail.
              </Label>
              {/* <Policy
                id="privacy-policy"
                type="button"
                error={errors?.policy}
                onClick={() => modalRef.current?.toggle?.()}
              >
                villkoren
              </Policy> */}
            </CheckboxWrapper>

            <Button>
              <ButtonText>
                {success ? 'Hörs snart! ⏰' : 'Häng med på resan!'}
              </ButtonText>
            </Button>
          </Form>
        </Punchline>
      </Wrapper>
      <PrivacyPolicyModal ref={modalRef} />
      {success && (
        <Toast>
          Vi har skickat ett mejl (kolla skräppost). Hörs snart igen! 😊
        </Toast>
      )}
    </Box>
  )
}
