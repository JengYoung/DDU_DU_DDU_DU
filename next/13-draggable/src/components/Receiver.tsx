import React from 'react'

import * as S from './Receiver.styles'
import { TDraggableEvent } from './Draggable.types';
import { TReceiverProps } from './Receiver.types';


export const Receiver = ({ width = 'auto', height = 'auto', reversed = false, isActive = false, children, onDragOver, onDrop }: TReceiverProps) => {
  return (
    <S.Container 
      width={width}
      height={height}
      reversed={reversed}
      isActive={isActive} 
      onDragOver={onDragOver} 
      onDrop={onDrop}
    >
      {children}
    </S.Container>
  )
}
