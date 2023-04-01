import { useState, useCallback, useEffect } from "react";
import Axios from "axios";
import { TRegion } from "../types";

const MAPBOX_API = Axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places/",
});

const GOUV_API = Axios.create({
  baseURL: "https://geo.api.gouv.fr",
});

interface TLocation {
  place_name: string;
  coordinates: { lat: number; lng: number };
}

export const useGeocoding = () => {
  const [location, setLocation] = useState<TLocation | undefined>(undefined);
  const [regions, setRegions] = useState<TRegion[]>([]);
  const [codeRegion, setCodeRegion] = useState<number | undefined>(undefined);

  useEffect(() => {
    getAllRegion();
  }, []);

  const searchPlace = useCallback((keyWord: string) => {
    MAPBOX_API.get(
      `${keyWord}.json?limit=1&access_token=${process.env.REACT_APP_MAPBOX_API_KEY}`
    ).then((response) => {
      const { place_name, geometry } = response.data.features[0];
      const lng = geometry[0];
      const lat = geometry[1];
      setLocation({
        place_name,
        coordinates: { lat, lng },
      });
    });
  }, []);

  const getAllRegion = useCallback(() => {
    GOUV_API.get(`/regions`).then((regions) => {
      setRegions(regions.data as TRegion[]);
    });
  }, []);

  const getCodeRegionByCoordinate = useCallback((lat: number, lng: number) => {
    GOUV_API.get(`/communes?lat=${lat}&lon=${lng}`).then((communes) => {
      setCodeRegion(+communes.data[0].codeRegion);
    });
  }, []);

  return {
    ...location,
    regions,
    codeRegion,
    searchPlace,
    getCodeRegionByCoordinate,
  };
};
