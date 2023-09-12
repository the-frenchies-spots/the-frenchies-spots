/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { SpotUiContext, type SpotUiContextData } from "./SpotUI.context";
import { TLocation, useLocationCtx, useMap } from "@frenchies-spots/map";
import { getFuncOrThrow } from "../../utils/get-func-or-throw";
import { formatPoint } from "../../utils/format-point";
import { useDisclosure } from "@frenchies-spots/hooks";

interface SpotUiProviderProps
  extends Pick<SpotUiContextData, "getFilterSpots" | "form"> {
  children: React.ReactNode;
}

export const SpotUiProvider = (props: SpotUiProviderProps) => {
  const { children, getFilterSpots, form, ...values } = props;

  const { viewport, onViewportChange } = useMap();
  const { location: userPosition } = useLocationCtx();
  const [filterOpened, { open, close }] = useDisclosure(false);

  const [placeName, setPlaceName] = useState<string>("");
  const [isRayon, setIsRayon] = useState<boolean>(false);
  const [isMapMode, setIsMapMode] = useState<boolean>(true);
  const [coordPoint, setCoordPoint] = useState<TLocation["coordinates"] | null>(
    null
  );

  useEffect(() => {
    const initFilterSpot = getFuncOrThrow(getFilterSpots);

    if (userPosition) {
      const { lat, lng } = userPosition.coordinates;
      const point = formatPoint({ lat, lng, m: 5000 });
      setCoordPoint(userPosition.coordinates);
      setPlaceName(userPosition.value);
      setIsRayon(true);
      onViewportChange((current) => ({
        ...current,
        latitude: lat,
        longitude: lng,
        zoom: 12,
      }));
      initFilterSpot({
        variables: {
          spotsInput: {
            ...form?.values,
            point,
          },
        },
      });
      form?.setValues((prev) => ({ ...prev, point }));
    } else {
      initFilterSpot();
    }
  }, [userPosition]);

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
        getFilterSpots,
        viewport,
        onViewportChange,
        form,
        filterOpened,
        openFilter: open,
        closeFilter: close,
      }}
    >
      {children}
    </SpotUiContext.Provider>
  );
};
