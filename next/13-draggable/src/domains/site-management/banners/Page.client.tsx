"use client";

import React from 'react'
import { Container } from './Page.styles'
import { List } from './List'
import { Slider } from './Slider'
import { TBannerResponse } from './types'
import { useBannersContext } from './hooks/banner.context'

export type TPageProps = {
  data: TBannerResponse[]
}

export const Page = ({ data }: TPageProps) => {
  const { activeList, inactiveList, setBanners } = useBannersContext();

  React.useEffect(() => {
    setBanners(data);
  },[data, setBanners])

  return (
    <Container>
      <List data={activeList}/>
      <Slider />
    </Container>
  )
}
