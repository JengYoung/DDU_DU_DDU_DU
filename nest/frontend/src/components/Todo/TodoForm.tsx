import { ETodos, IWriteTodo, writeTodo } from '@/apis/todos';
import React, { FormEvent, useState } from 'react';

interface ITodoFormProps {
  token: string;
}

export default function TodoForm({ token }: ITodoFormProps) {
  const [inputValue, setInputValue] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);

  const onChangeInput = (value: string) => {
    setInputValue(() => value);
  };

  const onCheckPrivateButton = () => {
    setIsPrivate((state) => !state);
  };

  const onSubmitButton = (e: FormEvent, payload: IWriteTodo) => {
    e.preventDefault();
    writeTodo(payload);
  };

  return (
    <form>
      <input onChange={(e) => onChangeInput(e.target.value)} />
      <button
        onClick={(e) =>
          onSubmitButton(e, {
            type: isPrivate ? ETodos.private : ETodos.public,
            content: inputValue,
            token,
          })
        }
      >
        할일 추가하기
      </button>
      <label>
        <span>비밀이야!</span>
        <input type="checkbox" onChange={onCheckPrivateButton} />
      </label>
    </form>
  );
}
