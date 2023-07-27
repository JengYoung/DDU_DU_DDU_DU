"use client";

import React, { DragEvent, PropsWithChildren } from 'react'

import * as S from './Receiver.styles'

export const Receiver = ({children}: PropsWithChildren) => {
  const dragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const drop = (e: DragEvent<HTMLDivElement>) => {
    const x = e.dataTransfer.getData("x");
    const y = e.dataTransfer.getData("y");

    console.log({ x, y })
  }

  return (
    <S.Container onDragOver={dragOver} onDrop={drop}>{children}</S.Container>
  )
}
