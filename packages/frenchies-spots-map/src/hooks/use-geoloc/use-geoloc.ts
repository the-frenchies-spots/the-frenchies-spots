import { useState, useEffect } from "react";

import { TCoordinate } from "../../types";

interface useGeolocParams {
  autoStart?: boolean;
}

export const useGeoloc = (params?: useGeolocParams) => {
  const [userPosition, setUserPosition] = useState<TCoordinate | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getLocation = () => {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error(error);
        }
      );
    }
    setLoading(false);
    return null;
  };

  useEffect(() => {
    if (params?.autoStart) {
      getLocation();
    }
  }, []);

  return { loading, userPosition, getLocation };
};
