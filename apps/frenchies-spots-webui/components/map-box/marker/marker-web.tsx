import React from "react";
import { Marker } from "react-map-gl";

interface MarkerWebProps {
  lat: number;
  lng: number;
}

export const MarkerWeb = (props: MarkerWebProps) => {
  const { lat, lng } = props;
  return <Marker latitude={lat} longitude={lng} />;
};
