import { inputAtom } from '@/atoms/todos/inputAtom';
import Input from '@/components/Input';
import { useAtom } from 'jotai';
import React, { useEffect } from 'react';

const WritePage = () => {
  const [inputValue, setInputValue] = useAtom(inputAtom);

  const onInput = (text: string) => {
    setInputValue(() => text);
  };

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);
  return (
    <div>
      <Input onInput={onInput} />
    </div>
  );
};

export default WritePage;
