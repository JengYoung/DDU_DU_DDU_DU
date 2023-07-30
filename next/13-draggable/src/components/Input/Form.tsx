import React from 'react'
import { TFormInputProps, TInputProps } from './types'

export const FormInput = ({ id, label, hints, isError = false, placeholder }: TFormInputProps) => {
  const errorMessageId = `${id} -error-message`;
  return (
    <label htmlFor={id}>
      <span>{label}</span>
      <input id={id} placeholder={placeholder} aria-errormessage={errorMessageId}/>
      {isError && <strong id={errorMessageId}>{hints}</strong>}
    </label>
  )
}
