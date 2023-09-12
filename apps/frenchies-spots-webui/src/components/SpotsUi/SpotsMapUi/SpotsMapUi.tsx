/* eslint-disable react-hooks/exhaustive-deps */
import React, { Dispatch, useEffect } from "react";

import {
  Map,
  MapMarker,
  CurrentLocationMarker,
  MapPerimeter,
  useMap,
} from "@frenchies-spots/map";
import { SpotEntity } from "@frenchies-spots/gql";
import type { TCoordinate, TLocation, TViewport } from "@frenchies-spots/map";
import { TSpotFilterForm } from "../../../types";
import { Log } from "@frenchies-spots/material";
import { IconFlag } from "@frenchies-spots/icon";
import PinMarker from "@frenchies-spots/map/src/components/Marker/PinMarker/PinMarker";

interface SpotsMapUiProps {
  list: SpotEntity[] | undefined;
  userPosition: TCoordinate | null;
  form: TSpotFilterForm;
  viewport: TViewport;
  isRayon: boolean;
  coordPoint: TLocation["coordinates"] | null;
  onViewportChange: Dispatch<React.SetStateAction<TViewport>>;
}

const SpotsMapUi = (props: SpotsMapUiProps) => {
  const {
    viewport,
    coordPoint,
    isRayon,
    onViewportChange,
    list,
    userPosition,
    form,
  } = props;

  const isCurrentUserPosition =
    coordPoint?.lat === userPosition?.lat &&
    coordPoint?.lng === userPosition?.lng;

  return (
    <Map viewport={viewport} onViewportChange={onViewportChange}>
      {isRayon && coordPoint && (
        <MapPerimeter
          lat={coordPoint.lat}
          lng={coordPoint.lng}
          radius={form.values.point.maxDistance / 1000}
        />
      )}

      {userPosition && (
        <CurrentLocationMarker lat={userPosition.lat} lng={userPosition.lng} />
      )}

      {!isCurrentUserPosition && coordPoint && (
        <PinMarker lat={coordPoint.lat} lng={coordPoint.lng} />
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
