import {
  alignCenter,
  borderWidth,
  borderRadius,
  flexCenter,
  flexFull,
  fullHeight,
  justifyCenter,
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
    ${borderWidth()}
    ${pxPadding(20)}
  `,
  todoInfo: css`
    justify-content: space-between;
    height: 1.5rem;
  `,
  completedIcon: css`
    ${flexCenter}
    font-size: ${(props) => props.theme.fontSizes.xl};
  `,
};

const Skins = {
  card: css`
    cursor: pointer;

    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.text};
    border-color: ${(props) => props.theme.colors.borderColor};

    box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.2);
  `,
  categoryName: css`
    font-weight: ${(props) => props.theme.fontWeights.bold};
  `,
  completedIcon: (completed: boolean) => css`
    color: ${completed ? 'green' : 'red'};
  `,
};

const HStackCompletedIcon = styled.div<{ completed: boolean }>`
  ${Structures.completedIcon}
  ${(props) => Skins.completedIcon(props.completed)}
`;

const Card = ({ todo, onClick }: { todo: TodoInterface; onClick: () => void }) => {
  return (
    <VStack css={[Structures.card, Skins.card, pxMargin(16, 'bottom')]} onClick={onClick}>
      <header css={[flexFull]}>{todo.todo}</header>

      <HStack css={[Structures.todoInfo, alignCenter]}>
        <div>
          <span css={Skins.categoryName}>ID: </span> {todo.userId}
        </div>
        <HStackCompletedIcon completed={todo.completed}>
          {todo.completed ? <BsFillCheckCircleFill /> : <AiFillCloseCircle />}
        </HStackCompletedIcon>
      </HStack>
    </VStack>
  );
};

export default Card;
