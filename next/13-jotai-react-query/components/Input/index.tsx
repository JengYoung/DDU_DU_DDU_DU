import { borderRadius } from '@/styles/css/structures';
import React, { FormEvent } from 'react';
import { css } from 'styled-components';

interface InputValueInterface {
  onInput: (T: string) => void;
}

const Structures = {
  input: css`
    width: 300px;
    height: 40px;
    ${borderRadius(10)}
  `,
};

const Input = ({ onInput }: InputValueInterface) => {
  const handleInput = (e: FormEvent) => {
    onInput((e.target as HTMLInputElement).value);
  };

  return <input css={[Structures.input]} onInput={handleInput} />;
};

export default Input;
