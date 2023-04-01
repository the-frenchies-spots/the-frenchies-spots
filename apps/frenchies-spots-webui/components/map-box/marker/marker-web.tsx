import React from "react";
import { Marker } from "react-map-gl";

interface MarkerWebProps {
  lat: number;
  lng: number;
}

export const MarkerWeb = (props: MarkerWebProps) => {
  const { lat, lng } = props;
  console.log("je suis dans le marker");
  return <Marker latitude={lat} longitude={lng} />;
};
