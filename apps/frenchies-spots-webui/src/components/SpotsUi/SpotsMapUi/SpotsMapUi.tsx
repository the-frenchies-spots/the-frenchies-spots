import React from "react";

import {
  Map,
  MapMarker,
  CurrentLocationMarker,
  MapPerimeter,
  useLocationCtx,
  PeopleMarker,
} from "@frenchies-spots/map";
import { ProfileEntity, SpotEntity } from "@frenchies-spots/gql";
import PinMarker from "@frenchies-spots/map/src/components/Marker/PinMarker/PinMarker";
import { useSpotUi } from "../../../hooks/use-spot-ui";

interface SpotsMapUiProps {
  spotList: SpotEntity[] | undefined;
  peopleList: ProfileEntity[] | undefined;
}

const SpotsMapUi = (props: SpotsMapUiProps) => {
  const { spotList, peopleList } = props;

  const { location: userPosition } = useLocationCtx();
  const {
    form,
    viewport,
    setViewPort,
    coordPoint,
    isRayon,
    setCurrentSpotId,
    setCurrentProfileId,
    openDrawer,
  } = useSpotUi();

  const isCurrentUserPosition =
    coordPoint?.lat === userPosition?.coordinates?.lat &&
    coordPoint?.lng === userPosition?.coordinates?.lng;

  const handleSpotClick = (id: string) => {
    setCurrentSpotId(id);
    openDrawer();
  };

  const handleProfileClick = (id: string) => {
    setCurrentProfileId(id);
    openDrawer();
  };

  return (
    <Map viewport={viewport} onViewportChange={setViewPort}>
      {userPosition && (
        <CurrentLocationMarker
          lat={userPosition?.coordinates?.lat}
          lng={userPosition?.coordinates?.lng}
        />
      )}

      {isRayon && coordPoint && (
        <MapPerimeter
          lat={coordPoint.lat}
          lng={coordPoint.lng}
          radius={form.values.point.maxDistance / 1000}
        />
      )}

      {!isCurrentUserPosition && coordPoint && (
        <PinMarker lat={coordPoint.lat} lng={coordPoint.lng} />
      )}

      {spotList?.map((spot) => {
        const { id, location } = spot;
        const [lng, lat] = location.coordinates;
        return (
          <MapMarker
            key={id}
            lat={lat}
            lng={lng}
            onClick={() => handleSpotClick(id)}
          />
        );
      })}

      {peopleList?.map((profile) => {
        const { id, location, avatarUrl } = profile;
        const [lng, lat] = location.coordinates;
        return (
          <PeopleMarker
            zoom={viewport.zoom}
            key={id}
            lat={lat}
            lng={lng}
            src={`${avatarUrl}`}
            onClick={() => handleProfileClick(id)}
          />
        );
      })}
    </Map>
  );
};

export default SpotsMapUi;
