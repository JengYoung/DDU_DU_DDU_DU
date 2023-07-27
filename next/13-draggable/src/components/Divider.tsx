"use client";

import React from 'react'
import * as S from './Divider.styles';
import { TDividerProps } from './Divider.types';

export const Divider = ({ width = "8px", height = "160px", reversed = true, backgroundColor = "#708ded"}: TDividerProps) => {
  return (
    <S.Container width={width} height={height} reversed={reversed} backgroundColor={backgroundColor} />
  )
}
