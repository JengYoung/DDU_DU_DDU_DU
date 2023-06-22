import React from 'react';
import { TTodoCardProps } from '../types/card';

export const TodoCard = ({ title, description }: TTodoCardProps) => {
  return (
    <div>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};
