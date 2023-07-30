import React from 'react'
import { Placeholders } from './constants'

export const Ids = {
  "아이디입력": "form__user-id",
  "비밀번호입력": "form__user-pw",
  "비밀번호입력확인": "form__user-pw-confirm"
}
export const SignUpForm = () => {
  return (
    <div>
      <label htmlFor={Ids.아이디입력}>
        <span>아이디</span>
        <input id={Ids.아이디입력} placeholder={Placeholders.아이디입력} />
      </label>
      <input placeholder={Placeholders.비밀번호입력} />
    </div>
  )
}
