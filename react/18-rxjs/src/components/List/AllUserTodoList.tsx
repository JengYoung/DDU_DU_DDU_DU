import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchTodo } from '../../apis/fetchTodo';
import { TodoInterface } from '../../stores/TodoStore';
import { getClassName } from '../../utils/className';
import UserTodoCard from '../Card/UserTodoCard';

import styles from './list.module.scss';

const resource = fetchTodo();

const AllUserTodoList = () => {
  const allUserTodos = resource.read();
  const navigator = useNavigate();

  const onClickCard = (userId: string) => {
    navigator(`/todo/${userId}`);
  };

  return (
    <div>
      <ul className={getClassName(styles, 'todo-list')}>
        {allUserTodos &&
          allUserTodos.map(({ id, userId, content, isDone }: TodoInterface) => (
            <UserTodoCard
              key={id}
              userId={userId}
              content={content}
              isDone={isDone}
              onClick={() => onClickCard(userId)}
            />
          ))}
      </ul>
    </div>
  );
};

export default AllUserTodoList;
