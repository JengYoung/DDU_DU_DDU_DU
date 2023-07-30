"use client";

import React, { ChangeEvent } from 'react'
import { Hints, Placeholders, idRegex } from './constants'
import { FormInput } from '#/components/Input/Form'

import { SafeParseError, ZodError, z } from 'zod'
import { TRegisterFocusState, TRegisterKeys, TRegisterState } from './types'

export const Ids = {
  "아이디입력": "form__user-id",
  "비밀번호입력": "form__user-pw",
  "비밀번호확인": "form__user-pw-confirm"
}

export const SignUpForm = () => {
  const [registerState, setRegisterState] = React.useState<TRegisterState>({
    id: '',
    password: '',
    passwordConfirm: ''
  });

  const [focused, setFocused] = React.useState<TRegisterFocusState>({
    id: false,
    password: false,
    passwordConfirm: false
  })

  const handleChangeInput = (key: TRegisterKeys) => (e: ChangeEvent<HTMLInputElement>) => {
    setRegisterState((state) => ({
      ...state,
      [key]: e.target.value
    }))
  }

  const handleFocusInput = (key: TRegisterKeys) => () => {
    setFocused((state) => ({
      ...state,
      [key]: true
    }))
  }

  const idFocusedValid = z.string().refine((val) => !val.length && focused.id, {
    message: Hints.아이디_미입력
  }).safeParse(registerState.id)
  
  const idFormatValid = z.string().regex(idRegex, Hints.아이디_미일치).safeParse(registerState.id);

  return (
    <div>
      <FormInput 
        id={Ids.아이디입력} 
        value={registerState.id}
        label="아이디" 
        placeholder={Placeholders.아이디입력}
        isError={focused.id && !idFormatValid.success}
        hint={(idFocusedValid as SafeParseError<string>)?.error?.issues?.[0]?.message}
        onFocus={handleFocusInput('id')}
        onChange={handleChangeInput('id')}
      />

      <FormInput 
        id={Ids.비밀번호입력} 
        label="비밀번호" 
        placeholder={Placeholders.비밀번호입력}
        value={registerState.password}
        onFocus={handleFocusInput('password')}
      />

      <FormInput 
        id={Ids.비밀번호확인} 
        label="비밀번호 확인" 
        placeholder={Placeholders.비밀번호확인} 
        value={registerState.passwordConfirm}
        onFocus={handleFocusInput('passwordConfirm')}
      />
    </div>
  )
}
