"use client";

import React, { DragEvent, PropsWithChildren } from 'react';
import * as S from './Draggable.styles'
import { TDraggableEvent } from './Draggable.types';

export type TDraggableProps = {
  onDragStart?: TDraggableEvent;
  onDrag?: TDraggableEvent;
} & React.PropsWithChildren;

export const Draggable = ({ children, onDragStart, onDrag }: TDraggableProps) => {
  return (
    <S.Container draggable onDragStart={onDragStart} onDrag={onDrag}>
      {children}
    </S.Container>
  )
}
