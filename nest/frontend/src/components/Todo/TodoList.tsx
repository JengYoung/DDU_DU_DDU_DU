import { deleteTodo, getTodos, IDeleteTodo } from '@/apis/todos';
import { ITodo } from '@/types/todo';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';

interface ITodoListProps {
  token: string | null;
}

const TodoList = ({ token }: ITodoListProps) => {
  const [todosQueryKey, setTodosQueryKey] = useState(['todos/get', token, -1]);

  const fetchData = async () => {
    if (!token) return;

    const res = await getTodos({ token }).then((result) => result.data);

    return res;
  };

  const todosAPI = useQuery(todosQueryKey, fetchData, {
    suspense: true,
    enabled: !!token,
    retry: (count) => count < 1,
  });

  const deleteTodoAPI = useMutation(
    async ({ id, token }: IDeleteTodo) => {
      await deleteTodo({ id, token });

      return id;
    },
    {
      onSuccess: (id: number) => {
        setTodosQueryKey((state) => state.map((value, idx) => (idx === 2 ? id : value)));
      },
    }
  );

  const onClickDeleteButton = ({ id, token }: IDeleteTodo) => {
    deleteTodoAPI.mutate({
      id,
      token,
    });
  };

  if (!token) return <div></div>;
  return (
    <div>
      {!todosAPI.isLoading &&
        todosAPI?.data?.map((todo: ITodo) => (
          <div key={todo.todoId}>
            {todo.content}
            <button onClick={() => onClickDeleteButton({ id: todo.id, token })}>삭제하기</button>
          </div>
        ))}
    </div>
  );
};

export default TodoList;
