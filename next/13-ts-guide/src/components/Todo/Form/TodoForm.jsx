import React from 'react'


import * as S from './TodoForm.style'

export const TodoForm = ({ onSubmit, children }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit();
  }

  return (
    <S.TodoForm onSubmit={handleSubmit}>
      {children}
    </S.TodoForm>
  )
}
