"use client";

import React from "react";
import { TBannerResponse } from "../types";
import { getSortedData } from "../utils/array";

type TBanners = TBannerResponse[];
type TSetBanners = React.Dispatch<React.SetStateAction<TBanners>>;

export type TBannersContextState = {
  banners: TBanners;
  
  activeList: TBanners;
  inactiveList: TBanners;

  setBanners: TSetBanners;
  setActiveList?: TSetBanners;
  setInactiveList?: TSetBanners;
  updateBannerOrders: (param: TUpdateBannerOrdersParams) => void;
}

export type TUpdateBannerOrdersParams = { 
  banner: TBanners[number], 
  order: number;
  isActive: boolean;
}

const BannersContext = React.createContext<TBannersContextState>({
  banners: [],
  activeList: [],
  inactiveList: [],
  setBanners: () => {},
  setActiveList: () => {},
  setInactiveList: () => {},
  updateBannerOrders: () => {} 
});

const getBanners = ({banners, isActive}: {banners: TBannersContextState['banners'], isActive: boolean}) => {
  const filteredData = banners.filter((banner) => isActive === banner.isActive);
  const sortedData = getSortedData<TBannerResponse>(filteredData, (a, b) => a.order - b.order)

  return sortedData
}

const sortByOrder = (a: TBannerResponse, b: TBannerResponse, priority: TBannerResponse['title']) => {
  if (a.order === b.order) {
    if (a.title === priority) return -1;
    else return 1;
  }

  return a.order - b.order;
}

export const BannersProvider = ({ children }: React.PropsWithChildren) => {
  const [banners, setBanners] = React.useState<TBanners>([]);

  const activeList = getBanners({banners, isActive: true});
  const inactiveList = getBanners({banners, isActive: false});

  const updateBannerOrders = ({ banner, order, isActive }: TUpdateBannerOrdersParams) => {
    if (banner.order === order && banner.isActive === isActive) return;
    
    setBanners((banners) => {
      const activeList = getBanners({banners, isActive: true});
      const inactiveList = getBanners({banners, isActive: false});

      const targetList = (isActive ? activeList : inactiveList).filter(me => me.title !== banner.title);
      const nonTargetList = isActive ? inactiveList : activeList;

      const nextBanner = {
        ...banner,
        order
      }

      const getNextTargetList = (targetList: TBanners) =>  {
        if (order === banner.order) return targetList;

        const nextTargetList = [...targetList, nextBanner];

        return getSortedData(nextTargetList, (a, b) => sortByOrder(a, b, banner.title))
          .map((target, index) => ({
            ...target,
            order: index
          }))
      }

      const getNextNonTargetList = (nonTargetList: TBanners) => {
        if (order !== banner.order) return nonTargetList;

        const nextNonTargetList = [...nonTargetList, nextBanner];
        
        return getSortedData(nextNonTargetList, (a, b) => sortByOrder(a, b, banner.title))
          .map((target, index) => ({
            ...target,
            order: index
          }))
      }

      return [
        ...getNextTargetList(targetList),
        ...getNextNonTargetList(nonTargetList)
      ]
    })
  }

  return (
    <BannersContext.Provider value={{
      banners,
      setBanners,
      activeList,
      inactiveList,
      updateBannerOrders
      // setActiveList,
      // setInactiveList,
    }}>
      {children}
    </BannersContext.Provider>
  )
}

export const useBannersContext = () => React.useContext(BannersContext)