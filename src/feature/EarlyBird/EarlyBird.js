import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { useForm } from 'react-hook-form'

import Punchline from '../../components/Punchline'

import Modal from './Modal'

const TITLE = 'JOBELO'
const PARAGRAPH =
  'Lansering är nära! Vill du vara redo när det händer? Skriv in e-mail nedan och starta klockan i gröna knappen så sköter magin resten! 😎'
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
  font-size: 1rem;
  color: inherit;
  cursor: pointer;

  height: 42px;
  padding-left: 42px;
  font-family: Roboto, sans-serif;
  font-style: normal;
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
  font-family: Roboto, sans-serif;
  color: ${p => (p.error ? '#FF0000' : '#ffffff')};
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
  &:hover {
    background: rgba(86, 189, 101, 0.8);
  }
  border-radius: 8px;

  margin-top: 15px;
`

const ButtonText = styled(Label)`
  display: flex;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;

  color: #ffffff;
`

const Error = styled.div`
  color: red;
  padding-bottom: 8px;
`

const Policy = styled.div`
  color: blue;
  margin-left: 5px;
  text-decoration: underline;
  cursor: pointer;
`

export default function EarlyBird() {
  const { register, handleSubmit, errors } = useForm()
  const [visible, setVisible] = useState(false)

  function toggle() {
    setVisible(!visible)
  }

  async function handleEarlyBird({ email }) {
    try {
      console.log('email', email)
      // Do something
    } catch (err) {
      console.log('err', err)
    }
  }

  return (
    <Box>
      <Wrapper>
        <Punchline title={TITLE} paragraph={PARAGRAPH} />
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
              Jag godkänner
            </Label>
            <Policy onClick={toggle}>villkoren</Policy>
          </CheckboxWrapper>

          <Button>
            <ButtonText>Följ oss redan idag!</ButtonText>
          </Button>
        </Form>
      </Wrapper>
      <Modal isVisible={visible} toggle={toggle} />
    </Box>
  )
}
