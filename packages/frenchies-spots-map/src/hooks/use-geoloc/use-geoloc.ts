import { useState, useEffect } from "react";

import { TCoordinate } from "../../types";

interface useGeolocParams {
  autoStart?: boolean;
}

export const useGeoloc = (params?: useGeolocParams) => {
  const [userPosition, setUserPosition] = useState<TCoordinate | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getLocation = () => {
    if (navigator.geolocation) {
      // navigator.geolocation.getCurrentPosition(
      //   (position) => {
      //     setUserPosition({
      //       lat: position.coords.latitude,
      //       lng: position.coords.longitude,
      //     });
      //   },
      //   (error) => {
      //     console.error(error);
      //   }
      // );

      const successCallback: PositionCallback = (position) => {
        const { latitude, longitude } = position.coords;
        setUserPosition({ lat: latitude, lng: longitude });
      };

      const errorCallback: PositionErrorCallback = (error) => {
        console.error("Erreur de géolocalisation :", error);
      };

      const options: PositionOptions = {
        enableHighAccuracy: true,
        timeout: 50000,
      };

      navigator.geolocation.getCurrentPosition(
        successCallback,
        errorCallback,
        options
      );
    }
  };

  useEffect(() => {
    if (params?.autoStart) {
      getLocation();
    }
  }, []);

  return { loading, userPosition, getLocation };
};
