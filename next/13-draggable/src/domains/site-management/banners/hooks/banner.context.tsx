import React from "react";
import { TBannerResponse } from "../types";

export type TBannersContextState = {
  banners: TBannerResponse[];
  setBanners: React.Dispatch<React.SetStateAction<TBannersContextState['banners']>>
}
const BannersContext = React.createContext<TBannersContextState>({
  banners: [],
  setBanners: () => {}
});

export const BannersProvider = ({ children }: React.PropsWithChildren) => {
  const [banners, setBanners] = React.useState<TBannerResponse[]>([])

  return (
    <BannersContext.Provider value={{
      banners,
      setBanners
    }}>
      {children}
    </BannersContext.Provider>
  )
}

export const useBannersContext = () => React.useContext(BannersContext)