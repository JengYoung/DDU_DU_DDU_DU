import React from 'react';
import { TodoInterface } from '../../stores/TodoStore';
import styles from './list.module.scss';

interface ListInterface {
  className: string;
  children?: React.ReactNode;
}

const List = ({ className, children }: ListInterface) => {
  const nowClassName =
    styles.list +
    ' ' +
    className
      .split(' ')
      .map((name) => styles[name])
      .join('');

  return <ul className={nowClassName}>{children}</ul>;
};

export default List;
