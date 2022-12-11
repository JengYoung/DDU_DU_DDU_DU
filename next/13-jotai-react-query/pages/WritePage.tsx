import { inputAtom } from '@/atoms/todos/inputAtom';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { flexCenter, fullHeight, pxMargin } from '@/styles/css/structures';
import { HStack } from '@/styles/styled';
import { TodoAPIDataInterface, TodoInterface } from '@/types/todo';
import { useAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';
import React, { Suspense, useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const WritePage = () => {
  const queryClient = useQueryClient();
  const resetAtom = useResetAtom(inputAtom);

  const [inputValue, setInputValue] = useAtom(inputAtom);

  const onInput = (text: string) => {
    setInputValue(() => text);
  };

  const addTodo = useMutation<TodoInterface, Error, TodoInterface>(
    (data): Promise<TodoInterface> => {
      return fetch('https://dummyjson.com/todos/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then((res) => res.json());
    },
    {
      onMutate: async (data) => {
        await queryClient.cancelQueries('todosData');
        const previousTodos: TodoAPIDataInterface | undefined =
          queryClient.getQueryData('todosData');

        if (previousTodos) {
          queryClient.setQueryData('todosData', () => {
            return {
              ...previousTodos,
              todos: [...previousTodos.todos, data],
            };
          });
        }
      },
      onSuccess: () => {
        resetAtom();
      },
      onError: (error, values, context) => {
        alert('앗! API 호출이 되지 않았어요. 🥲');
      },
    }
  );

  const onSubmit = () => {
    addTodo.mutate({
      id: 9999,
      todo: inputValue,
      completed: false,
      userId: 15,
    });
  };

  return (
    <>
      <ReactQueryDevtools />
      <HStack center css={fullHeight}>
        {addTodo.isLoading ? (
          <div>{inputValue} 할일 추가 중입니다.</div>
        ) : (
          <>
            <Input onInput={onInput} inputValue={inputValue} mock={addTodo.data} />
            <Button onClick={onSubmit} metaCSS={[flexCenter, pxMargin(16, 'left')]}>
              입력
            </Button>
          </>
        )}
      </HStack>
    </>
  );
};

export default WritePage;
