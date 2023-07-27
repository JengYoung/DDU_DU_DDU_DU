import { Item } from "./Item.server";
import { TBannerResponse } from "./types"

import * as S from './List.styles'
import { Draggable } from "#/components/Draggable";
import { Receiver } from "#/components/Receiver";
import React from "react";
import { Divider } from "#/components/Divider";

type TList = {
  data: TBannerResponse[];
};

export const List = ({ data }: TList) => {
  return (
    <S.List>
      {data.map((item) => (
        <React.Fragment key={item.title}>
          <Draggable key={item.title}>
            <Item item={item} />
          </Draggable>

          <Receiver>
            <Divider width="8px" height="160px" reverse={false} />
          </Receiver>
        </React.Fragment>
      ))}
    </S.List>
  )
}