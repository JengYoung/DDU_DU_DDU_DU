import React from 'react';
import { deleteTodoType, TodoInterface, toggleTodoType } from '../../stores/TodoStore';
import { getClassName } from '../../utils/className';

import { FiX } from 'react-icons/fi';

import styles from './todo-card.module.scss';

interface TodoCardInterface {
  todo: TodoInterface;
  toggleTodo: toggleTodoType;
  deleteTodo: deleteTodoType;
}

const TodoCard = ({ todo, toggleTodo, deleteTodo }: TodoCardInterface) => {
  return (
    <div className={getClassName(styles, 'card', 'todo__card')}>
      <input type="checkbox" checked={todo.isDone} onChange={() => toggleTodo(todo.id)} />
      <div>{todo.content}</div>

      <button
        className={getClassName(styles, 'card__remove-button')}
        onClick={() => deleteTodo(todo.id)}
      >
        <FiX />
      </button>
    </div>
  );
};

export default TodoCard;
