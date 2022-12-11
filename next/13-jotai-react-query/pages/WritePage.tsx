import { inputAtom } from '@/atoms/todos/inputAtom';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { flexCenter, fullHeight, pxMargin } from '@/styles/css/structures';
import { HStack } from '@/styles/styled';
import { TodoAPIDataInterface, TodoInterface } from '@/types/todo';
import { useAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';
import React, { useEffect } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const WritePage = () => {
  const queryClient = useQueryClient();
  const todosData: undefined | TodoAPIDataInterface = queryClient.getQueryData('todosData');
  const resetAtom = useResetAtom(inputAtom);

  const [inputValue, setInputValue] = useAtom(inputAtom);

  const onInput = (text: string) => {
    setInputValue(() => text);
  };

  const addTodo = useMutation<TodoInterface, Error, TodoInterface>(
    () => {
      return fetch('https://dummyjson.com/todos/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          todo: 'Use DummyJSON in the project',
          completed: false,
          userId: 5,
        }),
      }).then((res) => res.json());
    },
    {
      onMutate: (data) => {
        if (todosData) {
          queryClient.setQueryData('todosData', () => {
            return {
              ...todosData,
              todos: [...todosData.todos, data],
            };
          });
        }

        return todosData;
      },
      onSuccess: () => {
        resetAtom();
      },
      onError: (error, values, context) => {
        console.log('here: ', error, values, context);
        alert('앗! API 호출이 되지 않았어요. 🥲');
      },
    }
  );

  const onSubmit = () => {
    addTodo.mutate({
      id: 9999,
      todo: inputValue,
      completed: false,
      userId: 9999,
    });
  };

  return (
    <>
      <ReactQueryDevtools />
      <HStack center css={fullHeight}>
        <Input onInput={onInput} inputValue={inputValue} />
        <Button onClick={onSubmit} metaCSS={[flexCenter, pxMargin(16, 'left')]}>
          입력
        </Button>
      </HStack>
    </>
  );
};

export default WritePage;
