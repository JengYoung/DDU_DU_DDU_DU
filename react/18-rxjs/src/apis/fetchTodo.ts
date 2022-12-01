import { TodoInterface } from '../stores/TodoStore';

interface APITodoInterface {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export function fetchTodo() {
  let error: string | null = null;
  let data: TodoInterface[] | null = null;
  const suspender = fetch(`https://jsonplaceholder.typicode.com/todos`)
    .then((res) => res.json())
    .then((res) => {
      return new Promise((resolve) => setTimeout(() => resolve(res), 3000));
    })
    .then(
      (res) =>
        (data = (res as APITodoInterface[]).map(
          ({ userId, id, title, completed }: APITodoInterface) => ({
            userId: userId.toString(),
            id,
            content: title,
            isDone: completed,
          })
        ))
    )
    .catch((e) => (error = e));
  return {
    read() {
      if (error) {
        throw error;
      }
      if (data === null) {
        throw suspender;
      } else {
        return data;
      }
    },
  };
}
