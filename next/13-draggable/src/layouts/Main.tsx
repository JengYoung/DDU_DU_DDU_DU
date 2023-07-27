import React, { PropsWithChildren } from 'react'
import * as S from './Main.styles';

export const Main = ({ children }: PropsWithChildren) => {
  return (
    <S.Container>{children}</S.Container>
  )
}
