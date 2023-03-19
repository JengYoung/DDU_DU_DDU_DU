import { deleteTodo, getTodos, IDeleteTodo, IUpdateTodo, updateTodo } from '@/apis/todos';
import { ITodo } from '@/types/todo';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useState, FormEvent } from 'react';

interface ITodoListProps {
  token: string | null;
}

interface ITodoInputParmas {
  id: number;
  content: string;
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

  const updateTodoAPI = useMutation(
    async ({ token, payload }: IUpdateTodo) => {
      await updateTodo({ token, payload });

      return payload.id;
    },
    {
      onSuccess: (id: number) => {
        todosAPI.refetch();
        setIsEdit((state) => ({
          ...state,
          [id]: false,
        }));
      },
    }
  );

  const [isEdit, setIsEdit] = useState<Record<number, boolean>>({});
  const changeEditMode = ({ id, content }: ITodoInputParmas) => {
    setIsEdit((state) => ({
      ...state,
      [id]: true,
    }));
    onChangeEditInput({ id, content });
  };

  const onChangeEditInput = ({ id, content }: ITodoInputParmas) => {
    setEditInputsState((state) => ({
      ...state,
      [id]: content,
    }));
  };

  const onClickUpdateButton = (e: FormEvent, { token, payload }: IUpdateTodo) => {
    e.preventDefault();
    updateTodoAPI.mutate({
      token,
      payload: {
        ...payload,
        content: editInputsState[payload.id],
      },
    });
  };

  const onClickDeleteButton = ({ id, token }: IDeleteTodo) => {
    deleteTodoAPI.mutate({
      id,
      token,
    });
  };

  const [editInputsState, setEditInputsState] = useState<Record<number, string>>({});
  if (!token) return <div></div>;
  return (
    <div>
      {!todosAPI.isLoading &&
        todosAPI?.data?.map((todo: ITodo) => (
          <div key={todo.todoId}>
            {isEdit[todo.id] ? (
              <>
                <input
                  onChange={(e) => onChangeEditInput({ id: todo.id, content: e.target.value })}
                  value={editInputsState[todo.id]}
                />
                <button onClick={(e) => onClickUpdateButton(e, { token, payload: todo })}>
                  수정하기
                </button>
              </>
            ) : (
              <>
                {todo.content}
                <button onClick={() => onClickDeleteButton({ id: todo.id, token })}>
                  삭제하기
                </button>
                <button onClick={(e) => changeEditMode({ id: todo.id, content: todo.content })}>
                  수정하기
                </button>
              </>
            )}
          </div>
        ))}
    </div>
  );
};

export default TodoList;
