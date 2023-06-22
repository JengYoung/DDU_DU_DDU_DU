import React from 'react';
import * as S from './TodoCard.style'

export const TodoCard = ({ title, description, onRemove, onEdit }) => {
  const [isEdit, setIsEdit] = React.useState(false);

  const [editValues, setEditValues] = React.useState({
    title: title,
    description: description
  });

  const handleStartEdit = () => {
    setIsEdit(true);
  }

  const handleEndEdit = () => {
    setIsEdit(false);
  }

  const handleCompleteEdit = () => {
    onEdit({ title: editValues.title, description: editValues.description });
    handleEndEdit();
  }

  const handleChangeTitle = (e) => {
    setEditValues(state => ({
      ...state,
      title: e.target.value
    }))
  }

  const handleChangeDescription = (e) => {
    setEditValues(state => ({
      ...state,
      description: e.target.value
    }))
  }

  return (
    isEdit ? (      
      <S.TodoCard>
        <S.EditInput value={editValues.title} onChange={handleChangeTitle} />
        <S.EditTextArea value={editValues.description} onChange={handleChangeDescription} />

        <S.Buttons>
          <S.EditButton onClick={handleCompleteEdit}>✅</S.EditButton>
          <S.EditCancelButton onClick={handleEndEdit}>⛔️</S.EditCancelButton>
        </S.Buttons>
      </S.TodoCard>
    ) : (
      <S.TodoCard>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>

        <S.Buttons>
          <S.EditButton onClick={handleStartEdit}>✏️</S.EditButton>
          <S.RemoveButton onClick={onRemove}>❌</S.RemoveButton>
        </S.Buttons>
      </S.TodoCard>
    )
  );
};
