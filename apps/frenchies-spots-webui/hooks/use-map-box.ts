import React, { useState, useCallback } from "react";
import Axios from "axios";
import { TViewport, TCoordinate } from "../types";
import { MAPBOX_API_URL, MAPBOX_API_KEY } from "../config/env";

const API = Axios.create({
  baseURL: MAPBOX_API_URL,
});

const franceViewPort = {
  bearing: 0,
  latitude: 46.851348046414415,
  longitude: 3.2371168456396333,
  padding: { top: 0, bottom: 0, left: 0, right: 0 },
  pitch: 0,
  zoom: 4.144539557736261,
};

export const useMapBox = (defaultViewport = franceViewPort) => {
  const [localePlace, setLocalePlace] = useState({});
  const [viewport, setViewport] = useState<TViewport>(defaultViewport);
  const [coordinate, setCoordinate] = useState<TCoordinate | undefined>(
    undefined
  );

  const handleViewportChange = useCallback((newViewport: TViewport) => {
    setViewport(newViewport);
  }, []);

  const callGeocoding = useCallback((keyWord: string) => {
    API.get(`${keyWord}.json?access_token=${MAPBOX_API_KEY}`).then(
      (response) => {
        setLocalePlace({
          place_name: response.data.features[0].place_name,
          coordinates: response.data.features[0].geometry.coordinates,
        });
      }
    );
  }, []);

  return {
    callGeocoding,
    localePlace,
    viewport,
    onViewportChange: handleViewportChange,
    coordinate,
    onCoordinateClick: setCoordinate,
  };
};
