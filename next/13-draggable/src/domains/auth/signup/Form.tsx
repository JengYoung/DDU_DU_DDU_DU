import React from 'react'
import { Placeholders } from './constants'

export const Ids = {
  "아이디입력": "form__user-id",
  "비밀번호입력": "form__user-pw",
  "비밀번호확인": "form__user-pw-confirm"
}
export const SignUpForm = () => {
  return (
    <div>
      <label htmlFor={Ids.아이디입력}>
        <span>아이디</span>
        <input id={Ids.아이디입력} placeholder={Placeholders.아이디입력} />
      </label>

      <label htmlFor={Ids.비밀번호입력}>
        <span>비밀번호</span>
        <input id={Ids.비밀번호입력} placeholder={Placeholders.비밀번호입력} />
      </label>

      <label htmlFor={Ids.비밀번호확인}>
        <span>비밀번호 확인</span>
        <input id={Ids.비밀번호확인} placeholder={Placeholders.비밀번호확인} />
      </label>
    </div>
  )
}
