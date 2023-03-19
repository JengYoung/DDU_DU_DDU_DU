import { getTodos } from '@/apis/todos';
import { ITodo } from '@/types/todo';
import { useQuery } from '@tanstack/react-query';

interface ITodoListProps {
  token: string | null;
}

const TodoList = ({ token }: ITodoListProps) => {
  const queryKey = [token];

  const fetchData = async () => {
    if (!token) return;

    const res = await getTodos({ token }).then((result) => result.data);

    return res;
  };

  const todosAPI = useQuery(queryKey, fetchData, {
    suspense: true,
    enabled: !!token,
    retry: (count) => count < 1,
  });

  return (
    <div>
      {!todosAPI.isLoading &&
        todosAPI?.data?.map((todo: ITodo) => <div key={todo.todoId}>{todo.content}</div>)}
    </div>
  );
};

export default TodoList;
