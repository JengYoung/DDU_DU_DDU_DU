import React from 'react'
import { TBannerResponse } from './types'

import * as S from './Item.styles';

type TItemProps = {
  item: TBannerResponse;
}

export const Item = ({ item }: TItemProps) => {
  return (
    <S.Container>
      <S.Inner>
        <S.Title>
          {item.title}
        </S.Title>

        <S.Text size="16px" marginTop="6px">{item.startAt} ~ {item.expiredAt}</S.Text>
        
        <S.Tag marginTop="12px" isActive={item.isActive}>
          <S.Text size="14px">{item.isActive ? '사용' : '미사용'}</S.Text>
        </S.Tag>

        <S.Text size="12px" marginTop="12px">{item.endPoint}</S.Text>
      </S.Inner>

      <S.Thumbnail src={item.imgSrc} alt="썸네일" width={240} height={160} />
    </S.Container>
  )
}
