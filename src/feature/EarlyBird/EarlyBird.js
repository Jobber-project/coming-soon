import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useForm } from 'react-hook-form'

import Punchline from '../../components/Punchline'

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

  margin-top: 15px;
`

const CheckboxWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Checkbox = styled.input`
  width: 16px;
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
`

const ButtonText = styled.p`
  display: flex;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;

  color: #ffffff;
`

const Error = styled.p`
  color: red;
  font-family: Roboto, sans-serif;
  font-style: normal;
`

export default function EarlyBird() {
  const { register, handleSubmit, errors } = useForm()

  async function handleEarlyBird({ email }) {
    try {
      // Do something
    } catch (err) {
      logger.error(err)
    }
  }

  console.log('errors', errors)

  return (
    <Box>
      <Wrapper>
        <Punchline title={TITLE} paragraph={PARAGRAPH} />
        <Form autoComplete="off" onSubmit={handleSubmit(handleEarlyBird)}>
          <Error>{errors?.email?.message || 'Ange E-postadress'}</Error>
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
              Jag godkänner villkoren
            </Label>
          </CheckboxWrapper>

          <Button>
            <ButtonText>Följ oss redan idag!</ButtonText>
          </Button>
        </Form>
      </Wrapper>
    </Box>
  )
}
