import React, { useEffect, useState } from 'react';
import { fetchTodo } from '../../apis/fetchTodo';
import { TodoInterface } from '../../stores/TodoStore';

const resource = fetchTodo();

const AllUserTodoList = () => {
  const allUserTodos = resource.read();

  return (
    <div>
      <ul>
        {allUserTodos &&
          allUserTodos.map(({ id, userId, content, isDone }: TodoInterface) => (
            <div key={id}>
              <h2>{userId}</h2>
              <div>{content}</div>
              <div>{isDone}</div>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default AllUserTodoList;
