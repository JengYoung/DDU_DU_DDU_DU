"use client";

import React, { DragEvent, PropsWithChildren } from 'react';
import * as S from './Draggable.styles'

export const Draggable = ({ children }: PropsWithChildren) => {
  const dragStart = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("x", JSON.stringify(e.clientX));
    e.dataTransfer.setData("y", JSON.stringify(e.clientY));
  }

  return (
    <S.Container draggable onDragStart={dragStart} onDrag={dragStart}>
      {children}
    </S.Container>
  )
}
