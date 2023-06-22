import React from 'react'

import { TodoInput } from '../Input/TodoInput';
import { SubmitButton } from './SubmitButton';

import * as S from './TodoForm.style'

export const TodoForm = ({ children }) => {
  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <S.TodoForm onSubmit={onSubmit}>
      <TodoInput id="todo-input" />
      <SubmitButton onSubmit={onSubmit}>할 일 입력</SubmitButton>

      {children}
    </S.TodoForm>
  )
}
