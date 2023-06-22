import React from 'react'
import * as S from './TodoInput.style'

const Input = ({ id, onChange }, ref) => {
  return (
    <S.TodoInput ref={ref} id={id} onChange={onChange}/>
  )
};

export const TodoInput = React.forwardRef(Input);