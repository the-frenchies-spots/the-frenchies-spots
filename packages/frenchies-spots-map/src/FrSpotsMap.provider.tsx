import React, { useEffect, useState } from "react";
import { FrSpotsMapContext } from "./FrSpotsMap.ctx";
import { TLocation, useGeocoding, useGeoloc } from "./hooks";

interface FrSpotsMapProviderProps {
  children: React.ReactNode;
}

export const FrSpotsMapProvider = (props: FrSpotsMapProviderProps) => {
  const { children } = props;

  const [location, setlocation] = useState<TLocation | null>(null);

  const { userPosition } = useGeoloc({ autoStart: true });
  const { searchPlace } = useGeocoding();

  useEffect(() => {
    if (userPosition) {
      const { lat, lng } = userPosition;
      searchPlace(`${lng},${lat}`).then((address) => {
        const res = {
          coordinates: address.coordinates,
          value: address.placeName,
        };
        setlocation(res);
      });
    }
  }, [userPosition]);

  return (
    <FrSpotsMapContext.Provider value={{ location }}>
      {children}
    </FrSpotsMapContext.Provider>
  );
};

FrSpotsMapProvider.displayName = "@frenchies-spots/map/FrSpotsMapProvider";
