"use client";

import { Item } from "./Item.server";
import { TBannerResponse } from "./types"

import * as S from './List.styles'
import { Draggable } from "#/components/Draggable";
import { Receiver } from "#/components/Receiver";
import React, { useState } from "react";
import { Divider } from "#/components/Divider";
import { useBannersContext } from "./hooks/banner.context";

type TList = {
  data: TBannerResponse[];
};

export const List = ({ data }: TList) => {
  const { updateBannerOrders } = useBannersContext();

  const [orders, setOrders] = useState<{ start: number | null; end: number | null}>({
    start: null,
    end: null
  });

  const handleDragOver = (index: number) => (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()

    setOrders(state => ({
      ...state,
      end: index
    }))
  }


  const handleDragStart = (item: TBannerResponse) => (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("x", JSON.stringify(e.clientX));
    e.dataTransfer.setData("y", JSON.stringify(e.clientY));
    e.dataTransfer.setData("banner", JSON.stringify(item));
    setOrders(state => ({
      ...state,
      start: item.order
    }))
  }

  const handleDrag = (item: TBannerResponse) => (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("x", JSON.stringify(e.clientX));
    e.dataTransfer.setData("y", JSON.stringify(e.clientY));
    e.dataTransfer.setData("banner", JSON.stringify(item));
    
    setOrders(state => ({
      ...state,
      start: item.order,
      end: null
    }))
  }
  
  const handleDragEnd = () => {
    setOrders({
      start: null,
      end: null
    })
  }

  const handleDrop = (order: number, isActive: boolean) => (e: React.DragEvent<HTMLDivElement>) => {
    const banner = JSON.parse(e.dataTransfer.getData("banner"));
    
    updateBannerOrders({ banner, order, isActive })
  }

  return (
    <S.List>
      {data.map((item, index) => (
        <React.Fragment key={item.title}>
          {
            !index && (
              <Receiver 
                isActive={!index && orders.end === index} 
                onDragOver={handleDragOver(index)} 
                onDrop={handleDrop(0, item.isActive)}
              >
                <Divider width="8px" height="160px" reversed={false} />
              </Receiver>
            )
          }

          <Draggable 
            key={item.title}
            onDragStart={handleDragStart(item)} 
            onDrag={handleDrag(item)}
            onDragEnd={handleDragEnd} 
          >
            <Item item={item} />
          </Draggable>

          <Receiver isActive={orders.end === index + 1} onDragOver={handleDragOver(index + 1)} onDrop={handleDrop(index + 1, item.isActive)}>
            <Divider width="8px" height="160px" reversed={false} />
          </Receiver>
        </React.Fragment>
      ))}
    </S.List>
  )
}