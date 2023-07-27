import React, { DragEvent, PropsWithChildren } from 'react'

import * as S from './Receiver.styles'
import { TDraggableEvent } from './Draggable.types';

type TReceiverProps = {
  isActive?: boolean;
  onDragOver: TDraggableEvent;
  onDrop: TDraggableEvent;
} & React.PropsWithChildren

export const Receiver = ({ isActive = false, children, onDragOver, onDrop }: TReceiverProps) => {
  return (
    <S.Container isActive={isActive} onDragOver={onDragOver} onDrop={onDrop}>{children}</S.Container>
  )
}
