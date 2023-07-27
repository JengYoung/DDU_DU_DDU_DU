"use client";

import React from "react";
import { TBannerResponse } from "../types";
import { getSortedData } from "../utils/array";

export type TBannersContextState = {
  banners: TBannerResponse[];
  
  activeList: TBannerResponse[];
  inactiveList: TBannerResponse[];

  setBanners: React.Dispatch<React.SetStateAction<TBannersContextState['banners']>>
}
const BannersContext = React.createContext<TBannersContextState>({
  banners: [],
  activeList: [],
  inactiveList: [],
  setBanners: () => {},
});

const getBanners = ({banners, isActive}: {banners: TBannersContextState['banners'], isActive: boolean}) => {
  const filteredData = banners.filter((banner) => isActive === banner.isActive);
  const sortedData = getSortedData<TBannerResponse>(filteredData, (a, b) => a.order - b.order)

  return sortedData
}

export const BannersProvider = ({ children }: React.PropsWithChildren) => {
  const [banners, setBanners] = React.useState<TBannerResponse[]>([])

  const activeList = getBanners({banners, isActive: true});
  const inactiveList = getBanners({banners, isActive: false});

  return (
    <BannersContext.Provider value={{
      banners,
      setBanners,
      activeList,
      inactiveList
    }}>
      {children}
    </BannersContext.Provider>
  )
}

export const useBannersContext = () => React.useContext(BannersContext)