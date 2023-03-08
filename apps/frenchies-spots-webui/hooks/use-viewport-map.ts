import { useState, useCallback } from "react";
import { TViewport } from "../types";

const franceViewPort = {
  bearing: 0,
  latitude: 46.851348046414415,
  longitude: 3.2371168456396333,
  padding: { top: 0, bottom: 0, left: 0, right: 0 },
  pitch: 0,
  zoom: 4.144539557736261,
};

const useViewportMap = () => {
  const [viewport, setViewport] = useState<TViewport>(franceViewPort);

  const handleViewportChange = useCallback((newViewport: TViewport) => {
    setViewport(newViewport);
  }, []);

  const handleGeocoderViewportChange = useCallback(
    (newViewport: TViewport) => {
      setViewport(newViewport);
      const geocoderDefaultOverrides = { transitionDuration: 1000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides,
      });
    },
    [handleViewportChange]
  );

  const handleResult = (event: any) => {
    console.log(event.result.geometry.coordinates);
  };

  return {
    onGeocoderViewportChange: handleGeocoderViewportChange,
    onResult: handleResult,
    viewport,
    setViewport,
    onViewportChange: handleViewportChange,
  };
};

export default useViewportMap;
