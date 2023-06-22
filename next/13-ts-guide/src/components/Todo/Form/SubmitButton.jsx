import React from 'react'
import * as S from './TodoForm.style'

export const SubmitButton = ({ onSubmit, children }) => {
  return (
    <S.SubmitButton type="submit" onClick={onSubmit}>{children}</S.SubmitButton>
  )
}
