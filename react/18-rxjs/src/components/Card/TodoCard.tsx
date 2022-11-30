import React from 'react';
import { TodoInterface, toggleTodoType } from '../../stores/TodoStore';
import { getClassName } from '../../utils/className';

import styles from './todo-card.module.scss';

interface TodoCardInterface {
  todo: TodoInterface;
  toggleTodo: toggleTodoType;
}

const TodoCard = ({ todo, toggleTodo }: TodoCardInterface) => {
  return (
    <div className={getClassName(styles, 'card', 'todo__card')}>
      <input type="checkbox" checked={todo.isDone} onChange={() => toggleTodo(todo.id)} />
      <div>{todo.content}</div>
    </div>
  );
};

export default TodoCard;
