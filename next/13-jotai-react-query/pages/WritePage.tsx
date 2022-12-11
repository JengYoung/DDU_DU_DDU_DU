import { inputAtom } from '@/atoms/todos/inputAtom';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { HStack } from '@/styles/styled';
import { useAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';
import React, { useEffect } from 'react';

const WritePage = () => {
  const [inputValue, setInputValue] = useAtom(inputAtom);
  const resetAtom = useResetAtom(inputAtom);

  const onInput = (text: string) => {
    setInputValue(() => text);
  };

  const onSubmit = () => {
    resetAtom();
  };

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);
  return (
    <HStack>
      <Input onInput={onInput} inputValue={inputValue} />
      <Button onClick={onSubmit}>입력</Button>
    </HStack>
  );
};

export default WritePage;
