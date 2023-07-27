"use client";

import React from 'react'
import * as S from './Slider.styles'

export const Slider = ({ data }: any) => {
  return (
    <>
      <S.Container>Slider: {JSON.stringify(data)}</S.Container>
      <S.Spacer />
    </>
  )
}
