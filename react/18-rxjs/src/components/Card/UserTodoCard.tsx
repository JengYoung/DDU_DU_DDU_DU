import React from 'react';
import styles from './user-todo-card.module.scss';
import { getClassName } from '../../utils/className';
import { BsFillCheckSquareFill, BsXSquareFill } from 'react-icons/bs';

interface UserTodoCardInterface {
  userId: string;
  content: string;
  isDone: boolean;
  onClick: () => void;
}

const UserTodoCard = ({ userId, content, isDone, onClick }: UserTodoCardInterface) => {
  return (
    <li className={getClassName(styles, 'user-todo-card')} onClick={onClick}>
      <h2 className={getClassName(styles, 'user-todo-card__user-id')}>{userId}</h2>
      <div className={getClassName(styles, 'user-todo-card__content')}>{content}</div>
      <div
        className={getClassName(
          styles,
          'user-todo-card__is-done',
          isDone ? 'user-todo-card__is-done--done' : 'user-todo-card__is-done--not-done'
        )}
      >
        {isDone ? <BsFillCheckSquareFill /> : <BsXSquareFill />}
      </div>
    </li>
  );
};

export default UserTodoCard;
