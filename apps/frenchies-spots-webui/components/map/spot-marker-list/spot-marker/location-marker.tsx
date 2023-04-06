import React from "react";
import { MapBoxMarker } from "../../../map-box";
import { Box, MarkerIcon } from "@frenchies-spots/materials";

interface SpotMarkerProps {
  lat: number;
  lng: number;
  onPress?: () => void;
}
export const LocationMarker = (props: SpotMarkerProps) => {
  const { lat, lng, onPress } = props;
  return (
    <MapBoxMarker lat={lat} lng={lng} onPress={onPress}>
      <MarkerIcon color="#fb5607" />
    </MapBoxMarker>
  );
};
