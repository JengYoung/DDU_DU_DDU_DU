import React from 'react';

export const TodoCard = ({ title, description }) => {
  return (
    <div>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};
