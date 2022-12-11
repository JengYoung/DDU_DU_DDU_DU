import { borderRadius } from '@/styles/css/structures';
import React, { FormEvent } from 'react';
import { css } from 'styled-components';
import { useResetAtom } from 'jotai/utils';
import { inputAtom } from '@/atoms/todos/inputAtom';

interface InputValueInterface {
  onInput: (T: string) => void;
  inputValue: string;
}

const Structures = {
  input: css`
    width: 300px;
    height: 40px;
    ${borderRadius(10)}
  `,
};

const Input = ({ onInput, inputValue }: InputValueInterface) => {
  const handleInput = (e: FormEvent) => {
    onInput((e.target as HTMLInputElement).value);
  };

  return <input css={[Structures.input]} onInput={handleInput} value={inputValue} />;
};

export default Input;
