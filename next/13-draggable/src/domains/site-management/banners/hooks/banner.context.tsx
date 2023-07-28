"use client";

import React from "react";
import { TBannerResponse } from "../types";
import { getSortedData } from "../utils/array";

type TBanners = TBannerResponse[];
export type TSetBanners = React.Dispatch<React.SetStateAction<TBanners>>;

export type TBannersContextState = {
  banners: TBanners;
  
  activeList: TBanners;
  inactiveList: TBanners;

  setBanners: TSetBanners;
  setActiveList: TSetBanners;
  setInactiveList: TSetBanners;
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
});

const getBanners = ({banners, isActive}: {banners: TBannersContextState['banners'], isActive: boolean}) => {
  const filteredData = banners.filter((banner) => isActive === banner.isActive);
  const sortedData = getSortedData<TBannerResponse>(filteredData, (a, b) => a.order - b.order)

  return sortedData
}

export const BannersProvider = ({ children }: React.PropsWithChildren) => {
  const [banners, setBanners] = React.useState<TBanners>([]);
  const [activeList, setActiveList] = React.useState<TBanners>([]);
  const [inactiveList, setInactiveList] = React.useState<TBanners>([]);

  React.useEffect(() => {
    const nowActiveList = getBanners({banners, isActive: true});
    const nowInactiveList = getBanners({banners, isActive: false});

    setActiveList(nowActiveList);
    setInactiveList(nowInactiveList);
  }, [banners]);

  console.log({activeList, inactiveList})

  return (
    <BannersContext.Provider value={{
      banners,
      setBanners,
      activeList,
      inactiveList,
      setActiveList,
      setInactiveList,
    }}>
      {children}
    </BannersContext.Provider>
  )
}

export const useBannersContext = () => React.useContext(BannersContext)