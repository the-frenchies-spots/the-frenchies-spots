import React, { useCallback, useEffect, useState } from "react";
import * as Location from "expo-location";
import { TCoordinate } from "../types";
import { getCodeRegionByCoordinate } from "../services";
import { useGeocoding } from "./use-geocoding";

type UseLocationProps = {
  lazy?: boolean;
};

export const useLocation = (props: UseLocationProps = { lazy: false }) => {
  const { lazy } = props;

  const [location, setLocation] = useState<TCoordinate | undefined>(undefined);
  const [place, setPlace] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  const { searchPlace } = useGeocoding();

  const loadLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setError("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    const { latitude: lat, longitude: lng } = location.coords;
    setLocation({ lat, lng });
    return { lat, lng };
  };

  useEffect(() => {
    if (!lazy) {
      loadLocation();
    }
  }, []);

  useEffect(() => {
    if (!lazy && location) {
      searchPlace(`${location.lng},${location.lat}`).then((address) => {
        setPlace(address.placeName);
      });
    }
  }, [location]);

  const getCurrentRegion = useCallback(
    async (coord = location) => {
      if (coord) {
        const { lat, lng } = coord;
        return getCodeRegionByCoordinate(lat, lng).then((codeRegion) => {
          return codeRegion;
        });
      }
      return null;
    },
    [location]
  );

  return { location, place, error, loadLocation, getCurrentRegion };
};
