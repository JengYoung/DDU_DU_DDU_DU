import React from 'react';
import * as S from './TodoCard.style'

export const TodoCard = ({ title, description }) => {
  return (
    <S.TodoCard>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.TodoCard>
  );
};
