import React, { useState } from "react";
import { SpotUiContext, type SpotUiContextData } from "./SpotUI.context";
import { TLocation } from "@frenchies-spots/map";

interface SpotUiProviderProps
  extends Pick<SpotUiContextData, "getFilterSpots" | "form"> {
  children: React.ReactNode;
}

export const SpotUiProvider = (props: SpotUiProviderProps) => {
  const { children, ...values } = props;

  const [isMapMode, setIsMapMode] = useState<boolean>(true);
  const [placeName, setPlaceName] = useState<string>("");
  const [isRayon, setIsRayon] = useState<boolean>(false);
  const [coordPoint, setCoordPoint] = useState<TLocation["coordinates"] | null>(
    null
  );

  return (
    <SpotUiContext.Provider
      value={{
        ...values,
        coordPoint,
        setCoordPoint,
        isRayon,
        setIsRayon,
        isMapMode,
        setIsMapMode,
        placeName,
        setPlaceName,
      }}
    >
      {children}
    </SpotUiContext.Provider>
  );
};
