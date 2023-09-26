import { useState, useCallback } from "react";

import Axios from "axios";

const MAPBOX_API = Axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places/",
});

type searshPlace = {
  data: {
    features: { place_name: string; center: [number, number] }[];
  };
};

export interface TLocation {
  value: string;
  coordinates: { lat: number; lng: number };
}
const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;

export const useGeocoding = () => {
  const [location, setLocation] = useState<TLocation | undefined>(undefined);

  const getSearchAddress = useCallback(
    (keyWord: string): Promise<TLocation[]> => {
      return MAPBOX_API.get(
        `${keyWord}.json?limit=5&country=fr&access_token=${MAPBOX_API_KEY}`
      ).then((response: searshPlace) => {
        return response.data.features.map((res) => ({
          value: res.place_name,
          coordinates: { lat: res.center[1], lng: res.center[0] },
        }));
      });
    },
    []
  );

  const searchPlace = useCallback((keyWord: string) => {
    return MAPBOX_API.get(
      `${keyWord}.json?limit=1&bbox=-10.0,35.0,15.0,55.0&access_token=${MAPBOX_API_KEY}`
    ).then((response) => {
      console.log("=====================================");
      console.log(response);
      console.log("=====================================");

      const place_name = response?.data?.features[0]?.place_name;
      const geometry = response?.data?.features[0]?.geometry;
      const lng = geometry?.coordinates[0];
      const lat = geometry?.coordinates[1];
      const res = {
        placeName: place_name,
        coordinates: { lat, lng },
      };
      return res;
    });
  }, []);

  return {
    searchPlace,
    getSearchAddress,
    ...location,
  };
};
