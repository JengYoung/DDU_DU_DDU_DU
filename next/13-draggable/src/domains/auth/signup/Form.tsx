"use client";

import { useRouter } from 'next/navigation';
import React, { ChangeEvent } from 'react'
import { SafeParseError, ZodError, z } from 'zod'

import { FormInput } from '#/components/Input/Form'

import { Hints, Placeholders, idRegex } from './constants'
import { TRegisterFocusState, TRegisterKeys, TRegisterState } from './types'

export const Ids = {
  "아이디입력": "form__user-id",
  "비밀번호입력": "form__user-pw",
  "비밀번호확인": "form__user-pw-confirm"
}

type TPushButtonProps = {
  disabled: boolean;
  href: string;
}
export const PushButton = ({ disabled, href }: TPushButtonProps) => {
  const router = useRouter();

  const go = (destination: string) => () => {
    router.push(destination)
  }

  return (
    <button onClick={go(href)} disabled={disabled}>다음</button>
  )
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

  const handleBlurInput = (key: TRegisterKeys) => () => {
    setFocused((state) => ({
      ...state,
      [key]: false
    }))
  }

  const idValid = z
    .string()
    .regex(idRegex, Hints.아이디_미일치)
    .safeParse(registerState.id)

  const passwordValid = z
    .string()
    .min(8, Hints.비밀번호_미일치)
    .regex(idRegex, Hints.비밀번호_미일치)
    .safeParse(registerState.password)

  const passwordConfirmValid = z
    .string()
    .min(8, Hints.비밀번호확인_미일치)
    .regex(idRegex, Hints.비밀번호확인_미일치)
    .refine((val) => val === registerState.password, Hints.비밀번호확인_미일치)
    .safeParse(registerState.passwordConfirm)

  const router = useRouter();

  const isDisabledPushButton = !idValid.success || !passwordValid.success || !passwordConfirmValid.success;

  return (
    <div>
      <FormInput 
        id={Ids.아이디입력} 
        value={registerState.id}
        label="아이디" 
        placeholder={Placeholders.아이디입력}
        isError={focused.id && !idValid.success}
        hint={(idValid as SafeParseError<string>)?.error?.issues?.[0]?.message}
        onFocus={handleFocusInput('id')}
        onBlur={handleBlurInput('id')}
        onChange={handleChangeInput('id')}
      />

      <FormInput 
        id={Ids.비밀번호입력} 
        value={registerState.password}
        label="비밀번호" 
        placeholder={Placeholders.비밀번호입력}
        isError={focused.password && !passwordValid.success}
        hint={(passwordValid as SafeParseError<string>)?.error?.issues?.[0]?.message}
        onFocus={handleFocusInput('password')}
        onBlur={handleBlurInput('password')}
        onChange={handleChangeInput('password')}
      />

      <FormInput 
        id={Ids.비밀번호확인} 
        value={registerState.passwordConfirm}
        label="비밀번호 확인" 
        placeholder={Placeholders.비밀번호확인} 
        isError={focused.passwordConfirm && !passwordConfirmValid.success}
        hint={(passwordConfirmValid as SafeParseError<string>)?.error?.issues?.[0]?.message}
        onFocus={handleFocusInput('passwordConfirm')}
        onBlur={handleBlurInput('passwordConfirm')}
        onChange={handleChangeInput('passwordConfirm')}
      />

      <PushButton disabled={isDisabledPushButton} href="signin" />
    </div>
  )
}
