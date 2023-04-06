import { Box } from "@frenchies-spots/materials";
import React, { ReactNode } from "react";
import { Marker } from "react-map-gl";

interface MarkerWebProps {
  lat: number;
  lng: number;
  onPress?: () => void;
  children?: ReactNode;
}

export const MarkerWeb = (props: MarkerWebProps) => {
  const { lat, lng, children, onPress } = props;
  return (
    <Marker latitude={lat} longitude={lng} onClick={onPress}>
      {children}
    </Marker>
  );
};
