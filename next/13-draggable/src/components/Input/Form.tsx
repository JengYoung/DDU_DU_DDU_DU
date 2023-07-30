"use client";

import React from 'react'
import { TFormInputProps } from './types'

export const FormInput = ({ 
  id, 
  label, 
  value, 
  hint, 
  placeholder,
  isError = false, 
  onFocus,
  onBlur,
  onChange,
}: TFormInputProps) => {
  const errorMessageId = `${id} -error-message`;
  
  return (
    <label htmlFor={id}>
      <span>{label}</span>

      <input 
        id={id} 
        value={value}
        placeholder={placeholder} 
        aria-errormessage={errorMessageId}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
      />
      
      {isError && 
        <strong id={errorMessageId}>{hint}</strong>
      }
    </label>
  )
}
