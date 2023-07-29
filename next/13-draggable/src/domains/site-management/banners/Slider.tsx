"use client";

import React from 'react'
import * as S from './Slider.styles'
import { List } from './List';
import { useBannersContext } from './hooks/banner.context';

export const Slider = () => {
  const {inactiveList} = useBannersContext();

  return (
    <>
      <S.Container>
        <S.Header>
          PC 미사용 배너
        </S.Header>

        <List data={inactiveList} vertical />
      </S.Container>
      <S.Spacer />
    </>
  )
}
