import { useState, useCallback, useEffect } from "react";
import Axios from "axios";
import { TRegion } from "../types";

const MAPBOX_API = Axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places/",
});

const GOUV_API = Axios.create({
  baseURL: "https://geo.api.gouv.fr",
});

type searshPlace = {
  data: {
    features: { place_name: string }[]
  }
}

interface TLocation {
  placeName: string;
  coordinates: { lat: number; lng: number };
}
const MAPBOX_API_KEY =
  "pk.eyJ1IjoiZnJlbmNoaWVzcG90cyIsImEiOiJjbGZzbmZ3YjEwMDQwM25wZWM1bm96emc4In0.CrgJmxNyiLfQ4QUewh_jXg";

export const useGeocoding = () => {
  const [location, setLocation] = useState<TLocation | undefined>(undefined);
  const [regions, setRegions] = useState<TRegion[]>([]);
  const [codeRegion, setCodeRegion] = useState<number | undefined>(undefined);

  useEffect(() => {
    getAllRegion();
  }, []);

  const searchPlace = useCallback((keyWord: string) => {
    return MAPBOX_API.get(
      `${keyWord}.json?limit=1&access_token=${MAPBOX_API_KEY}`
    ).then((response) => {
      const { place_name, geometry } = response.data.features[0];
      const lng = geometry[0];
      const lat = geometry[1];
      const res = {
        placeName: place_name,
        coordinates: { lat, lng },
      };
      setLocation(res);
      return res;
    });
  }, []);

  const getSearchAddress = useCallback((keyWord: string) => {
    return MAPBOX_API.get(
      `${keyWord}.json?limit=5&access_token=${MAPBOX_API_KEY}`
    ).then((response: searshPlace) => {
      return response.data.features.map((res) => res.place_name);
    });
  }, []);

  const getAllRegion = useCallback(() => {
    return GOUV_API.get(`/regions`).then((regions) => {
      const res = regions.data as TRegion[]
      setRegions(res);
      return res;
    });
  }, []);

  const getCodeRegionByCoordinate = useCallback((lat: number, lng: number):Promise<number> => {
    return GOUV_API.get(`/communes?lat=${lat}&lon=${lng}`).then((communes) => {
      const res = +communes.data[0].codeRegion
      setCodeRegion(res);
      return res
    });
  }, []);

  return {
    regions,
    codeRegion,
    getAllRegion,
    getSearchAddress,
    searchPlace,
    getCodeRegionByCoordinate,
    ...location,
  };
};
