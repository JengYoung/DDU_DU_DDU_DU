import React from 'react';
import { getClassName } from '../../utils/className';
import styles from './button.module.scss';

interface ButtonInterface {
  onClick: (e: React.MouseEvent) => void;
  className: string;
  children: React.ReactNode;
}
const Button = ({ onClick, className, children }: ButtonInterface) => {
  const buttonClassName = getClassName(styles, 'button', className);
  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
