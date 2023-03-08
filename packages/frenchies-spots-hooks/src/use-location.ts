import React, { useCallback, useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { TCoordinate } from '@frenchies-spots/types';
import { getCodeRegionByCoordinate } from '@frenchies-spots/services';

type UseLocationProps = {
  lazy?: boolean;
};

const useLocation = (props: UseLocationProps = { lazy: false }) => {
  const { lazy } = props;

  const [location, setLocation] = useState<TCoordinate | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setError('Permission to access location was denied');
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

  return { location, error, loadLocation, getCurrentRegion };
};

export default useLocation;
