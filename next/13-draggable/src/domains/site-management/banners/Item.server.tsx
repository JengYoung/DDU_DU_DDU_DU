import React from 'react'
import { TBannerResponse } from './types'

type TItemProps = {
  item: TBannerResponse;
}

export const Item = ({ item }: TItemProps) => {
  return (
    <div>{item.title}</div>
  )
}
