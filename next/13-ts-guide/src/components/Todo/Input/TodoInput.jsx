import React from 'react'
import * as S from './TodoInput.style'

export const TodoInput = React.forwardRef(({ id, onChange }, ref) => {
  return (
    <S.TodoInput ref={ref} id={id} onChange={onChange}/>
  )
});

TodoInput.displayName = "TodoInput";