import React, { DragEvent, PropsWithChildren } from 'react'

import * as S from './Receiver.styles'
import { TDraggableEvent } from './Draggable.types';

type TReceiverProps = {
  onDrop: TDraggableEvent;
} & React.PropsWithChildren

export const Receiver = ({ children, onDrop }: TReceiverProps) => {
  const dragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  return (
    <S.Container onDragOver={dragOver} onDrop={onDrop}>{children}</S.Container>
  )
}
