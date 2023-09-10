import React, { useEffect } from "react";

import {
  Map,
  MapMarker,
  CurrentLocationMarker,
  MapPerimeter,
  useMap,
} from "@frenchies-spots/map";
import { SpotEntity } from "@frenchies-spots/gql";
import type { TCoordinate } from "@frenchies-spots/map";

interface SpotsMapUiProps {
  list: SpotEntity[] | undefined;
  userPosition: TCoordinate | null;
}

const SpotsMapUi = ({ list, userPosition }: SpotsMapUiProps) => {
  const { viewport, onViewportChange, onCoordinateClick } = useMap();

  useEffect(() => {
    if (userPosition) {
      onViewportChange((current) => ({
        ...current,
        latitude: userPosition.lat,
        longitude: userPosition.lng,
        zoom: 12,
      }));
    }
  }, [userPosition]);

  return (
    <Map
      viewport={viewport}
      onViewportChange={onViewportChange}
      onCoordinateClick={onCoordinateClick}
    >
      {userPosition && (
        <MapPerimeter
          lat={userPosition.lat}
          lng={userPosition.lng}
          radius={5}
        />
      )}

      {userPosition && (
        <CurrentLocationMarker lat={userPosition.lat} lng={userPosition.lng} />
      )}

      {list?.map((spot) => {
        const { id, location } = spot;
        const [lng, lat] = location.coordinates;
        return <MapMarker key={id} lat={lat} lng={lng} />;
      })}
    </Map>
  );
};

export default SpotsMapUi;
