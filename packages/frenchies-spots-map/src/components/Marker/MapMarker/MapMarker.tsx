import React, { ReactNode } from "react";
import { Marker } from "react-map-gl";

export interface MapMarkerProps {
  lat: number;
  lng: number;
  onClick?: () => void;
  children?: ReactNode;
}

export const MapMarker = (props: MapMarkerProps) => {
  const { lat, lng, children, onClick } = props;
  return (
    <Marker latitude={lat} longitude={lng} onClick={onClick}>
      {children}
    </Marker>
  );
};
