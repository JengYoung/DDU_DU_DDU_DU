import React from 'react';
import styles from './input.module.scss';

interface InputInterface {
  onInput?: (e: React.FormEvent) => void;
  className: string;
}
const Input = ({ onInput, className }: InputInterface) => {
  const nowClassName =
    styles.input +
    ' ' +
    className
      .split(' ')
      .map((name) => styles[name])
      .join('');

  return <input onInput={onInput} className={nowClassName} />;
};

export default Input;
