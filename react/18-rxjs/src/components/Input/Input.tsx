import React from 'react';
import styles from './input.module.scss';

const Input = ({ className }: { className: string }) => {
  const nowClassName =
    styles.input +
    ' ' +
    className
      .split(' ')
      .map((name) => styles[name])
      .join('');

  return <input className={nowClassName} />;
};

export default Input;
