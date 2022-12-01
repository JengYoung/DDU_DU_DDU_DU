import React from 'react';
import styles from './input.module.scss';

interface InputInterface {
  value: string;
  onInput?: (e: React.FormEvent) => void;
  className: string;
}
const Input = ({ value, onInput, className }: InputInterface) => {
  const nowClassName =
    styles.input +
    ' ' +
    className
      .split(' ')
      .map((name) => styles[name])
      .join('');

  return <input value={value} onInput={onInput} className={nowClassName} />;
};

export default Input;
