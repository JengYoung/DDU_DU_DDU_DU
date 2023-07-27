"use client";

import { Item } from "./Item.server";
import { TBannerResponse } from "./types"

import * as S from './List.styles'
import { Draggable } from "#/components/Draggable";
import { Receiver } from "#/components/Receiver";
import React from "react";
import { Divider } from "#/components/Divider";
import { useBannersContext } from "./hooks/banner.context";

type TList = {
  data: TBannerResponse[];
};

export const List = ({ data }: TList) => {
  const { updateBannerOrders } = useBannersContext();

  const handleDrag = (item: TBannerResponse) => (e: React.DragEvent<HTMLDivElement>) => {
    console.log(item)
    e.dataTransfer.setData("x", JSON.stringify(e.clientX));
    e.dataTransfer.setData("y", JSON.stringify(e.clientY));
    e.dataTransfer.setData("banner", JSON.stringify(item));
  }

  const handleDrop = (order: number, isActive: boolean) => (e: React.DragEvent<HTMLDivElement>) => {
    const x = e.dataTransfer.getData("x");
    const y = e.dataTransfer.getData("y");
    const banner = JSON.parse(e.dataTransfer.getData("banner"));

    console.log({ x, y, banner})
    
    updateBannerOrders({ banner, order, isActive })
  }

  return (
    <S.List>
      {data.map((item, index) => (
        <React.Fragment key={item.title}>
          {
            !index && (
              <Receiver onDrop={handleDrop(0, item.isActive)}>
                <Divider width="8px" height="160px" reversed={false} />
              </Receiver>
            )
          }

          <Draggable onDragStart={handleDrag(item)} key={item.title}>
            <Item item={item} />
          </Draggable>

          <Receiver onDrop={handleDrop(index + 1, item.isActive)}>
            <Divider width="8px" height="160px" reversed={false} />
          </Receiver>
        </React.Fragment>
      ))}
    </S.List>
  )
}