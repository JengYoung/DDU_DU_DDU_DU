import React from 'react'
import { TInputProps } from './types'

export const FormInput = ({ id, label, placeholder}: TInputProps) => {
  return (
    <label htmlFor={id}>
      <span>{label}</span>
      <input id={id} placeholder={placeholder} />
    </label>
  )
}
