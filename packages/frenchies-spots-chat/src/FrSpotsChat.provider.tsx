import React from "react";
import { FrSpotsChatContext } from "./FrSpotsChat.ctx";

interface FrSpotsMapProviderProps {
  children: React.ReactNode;
}

export const FrSpotsMapProvider = (props: FrSpotsMapProviderProps) => {
  const { children } = props;

  return (
    <FrSpotsChatContext.Provider value={{}}>
      {children}
    </FrSpotsChatContext.Provider>
  );
};
