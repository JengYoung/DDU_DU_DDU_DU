"use client";

import { Item } from "./Item.server";
import { TBannerResponse } from "./types"

import * as S from './List.styles'
import { Draggable } from "#/components/Draggable";
import { Receiver } from "#/components/Receiver";
import React, { useState } from "react";
import { Divider } from "#/components/Divider";
import { TBannersContextState, TSetBanners, useBannersContext } from "./hooks/banner.context";

type TList = {
  data: TBannerResponse[];
  vertical?: boolean;
};

export const List = ({ data, vertical = false }: TList) => {
  const { setActiveList, setInactiveList } = useBannersContext();

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

  const removeBanner = (setter: TSetBanners, cmpBanner: TBannerResponse) => {
    setter((banners) => banners.filter((banner) => banner.title !== cmpBanner.title))
  }
  const addBanner  = (setter: TSetBanners, nextBanner: TBannerResponse) =>  {
    setter((banners) => {
      const nextBanners = [...banners].filter(banner => banner.title !== nextBanner.title).concat(nextBanner);
      const sortedBanners = [...nextBanners].sort((a, b) => {
        if (a.order === b.order) {
          return  (a.title === nextBanner.title) ? -1 : 1;
        }

        return a.order - b.order;
      })

      const reAssignedBanners = sortedBanners.map((banner, order) => ({ ...banner, order }))

      return reAssignedBanners;
    })
  }

  const onUpdateBanners = (banner: TBannerResponse, nextBanner: TBannerResponse) => {
    const isChangedBannerActive = banner.isActive !== nextBanner.isActive;

    if (isChangedBannerActive) {
      const removedListSetter = banner.isActive ? setActiveList : setInactiveList;
      const updatedListSetter = banner.isActive ? setInactiveList : setActiveList;

      removeBanner(removedListSetter, banner);
      addBanner(updatedListSetter, nextBanner);
    } else {
      const updatedListSetter = banner.isActive ? setActiveList : setInactiveList;
      addBanner(updatedListSetter, nextBanner);
    }
  }
  

  const handleDrop = (order: number, isActive: boolean) => (e: React.DragEvent<HTMLDivElement>) => {
    const banner = JSON.parse(e.dataTransfer.getData("banner"));
    
    const nextBanner = {
      ...banner,
      order,
      isActive,
    }

    console.log({ banner, nextBanner})

    onUpdateBanners(banner, nextBanner);
  }

  return (
    <S.List vertical={vertical}>
      {data.map((item, index) => (
        <React.Fragment key={item.title}>
          {
            !index && (
              <Receiver
                width="32px"
                height={vertical ? "240px" : "100%"}
                reversed={vertical}
                isActive={!index && orders.end === index} 
                onDragOver={handleDragOver(index)} 
                onDrop={handleDrop(0, item.isActive)}
              >
                <Divider width="8px" height="160px" reversed={vertical} />
              </Receiver>
            )
          }

          {/* 공통화 -  */}
          <Draggable 
            key={item.title}
            onDragStart={handleDragStart(item)} 
            onDrag={handleDrag(item)}
            onDragEnd={handleDragEnd} 
          >
            <Item item={item} />
          </Draggable>

          <Receiver 
            width="32px"
            height={vertical ? "240px" : "100%"}
            reversed={vertical}
            isActive={orders.end === index + 1} 
            onDragOver={handleDragOver(index + 1)} 
            onDrop={handleDrop(index + 1, item.isActive)}
          >
            <Divider width="8px" height="160px" reversed={vertical} />
          </Receiver>
        </React.Fragment>
      ))}
    </S.List>
  )
}