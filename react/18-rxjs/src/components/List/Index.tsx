import React from 'react';
import { TodoInterface } from '../../stores/TodoStore';
import './list.scss';

interface ListInterface {
  className: string;
  children?: React.ReactNode;
}

const List = ({ className, children }: ListInterface) => {
  return <ul className={`list ${className}`}>{children}</ul>;
};

export default List;
