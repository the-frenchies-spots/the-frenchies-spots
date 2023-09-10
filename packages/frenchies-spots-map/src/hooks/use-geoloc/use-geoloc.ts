import { useState, useEffect } from "react";
import { TCoordinate } from "../../types";

export const useGeoloc = () => {
  const [userPosition, setUserPosition] = useState<TCoordinate | null>(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
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
      return watchId;
    } else {
      console.error(
        "La géolocalisation n'est pas prise en charge par votre navigateur."
      );
      return null;
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  // useEffect(() => {
  //   const watchId: any = getLocation();
  //   // Nettoyage de l'écouteur lors du démontage du composant
  //   return () => {
  //     if (watchId) {
  //       navigator.geolocation.clearWatch(watchId);
  //     }
  //   };
  // }, []);

  return { userPosition, getLocation };
};
