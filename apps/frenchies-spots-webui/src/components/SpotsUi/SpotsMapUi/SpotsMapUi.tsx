import React from "react";

import {
  Map,
  MapMarker,
  CurrentLocationMarker,
  MapPerimeter,
  useLocationCtx,
} from "@frenchies-spots/map";
import { SpotEntity } from "@frenchies-spots/gql";
import PinMarker from "@frenchies-spots/map/src/components/Marker/PinMarker/PinMarker";
import { useSpotUi } from "../../../hooks/use-spot-ui";

interface SpotsMapUiProps {
  list: SpotEntity[] | undefined;
}

const SpotsMapUi = (props: SpotsMapUiProps) => {
  const { list } = props;

  const { location: userPosition } = useLocationCtx();
  const { form, viewport, setViewPort, coordPoint, isRayon } = useSpotUi();

  const isCurrentUserPosition =
    coordPoint?.lat === userPosition?.coordinates?.lat &&
    coordPoint?.lng === userPosition?.coordinates?.lng;

  return (
    <Map viewport={viewport} onViewportChange={setViewPort}>
      {isRayon && coordPoint && (
        <MapPerimeter
          lat={coordPoint.lat}
          lng={coordPoint.lng}
          radius={form.values.point.maxDistance / 1000}
        />
      )}

      {userPosition && (
        <CurrentLocationMarker
          lat={userPosition?.coordinates?.lat}
          lng={userPosition?.coordinates?.lng}
        />
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
