import { Item } from "./Item.server";
import { TBannerResponse } from "./types"

import * as S from './List.styles'

type TList = {
  data: TBannerResponse[];
};

export const List = ({ data }: TList) => {
  console.log({ data123: data })
  return (
    <S.List>
      {data.map((item) => (
          <Item key={item.title} item={item} />
      ))}
    </S.List>
  )
}