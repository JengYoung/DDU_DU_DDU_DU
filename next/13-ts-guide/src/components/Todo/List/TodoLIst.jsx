import React from 'react';
import * as S from './TodoList.style'

export const TodoList = ({ children, margin }) => {
  return <S.TodoList margin={margin}>{ children }</S.TodoList>;
};
