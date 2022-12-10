import {
  alignCenter,
  borderDefault,
  borderRadius,
  flexFull,
  fullHeight,
  pxMargin,
  pxPadding,
} from '@/styles/css/structures';
import { HStack, VStack } from '@/styles/styled';
import { TodoInterface } from '@/types/todo';
import React from 'react';
import styled, { css } from 'styled-components';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai';

const Structures = {
  card: css`
    ${fullHeight}
    ${borderRadius(10)}
    ${borderDefault()}
    ${pxPadding(20)}
  `,
  todoInfo: css`
    justify-content: space-between;
    height: 1.25rem;
    ${alignCenter}
  `,
};

const Skins = {
  card: css`
    border-color: ${(props) => props.theme.colors.borderColor};
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.text};
    cursor: pointer;
    box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.2);
  `,
};

const HStackCompletedIcon = styled.div<{ completed: boolean }>`
  color: ${(props) => (props.completed ? 'green' : 'red')};
`;

const Card = ({ todo }: { todo: TodoInterface }) => {
  return (
    <VStack css={[Structures.card, Skins.card, pxMargin(16, 'bottom')]}>
      <header css={[flexFull]}>{todo.todo}</header>

      <HStack css={Structures.todoInfo}>
        <div>{todo.userId}</div>
        <HStackCompletedIcon completed={todo.completed}>
          {todo.completed ? <BsFillCheckCircleFill /> : <AiFillCloseCircle />}
        </HStackCompletedIcon>
      </HStack>
    </VStack>
  );
};

export default Card;
