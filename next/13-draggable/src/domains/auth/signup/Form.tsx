import React from 'react'
import { Placeholders } from './constants'
import { FormInput } from '#/components/Input/Form'
import { z } from 'zod'

export const Ids = {
  "아이디입력": "form__user-id",
  "비밀번호입력": "form__user-pw",
  "비밀번호확인": "form__user-pw-confirm"
}

export const SignUpForm = () => {
  return (
    <div>
      <FormInput 
        id={Ids.아이디입력} 
        label="아이디" 
        placeholder={Placeholders.아이디입력}
      />

      <FormInput 
        id={Ids.비밀번호입력} 
        label="비밀번호" 
        placeholder={Placeholders.비밀번호입력} 
      />

      <FormInput 
        id={Ids.비밀번호확인} 
        label="비밀번호 확인" 
        placeholder={Placeholders.비밀번호확인} 
      />
    </div>
  )
}
