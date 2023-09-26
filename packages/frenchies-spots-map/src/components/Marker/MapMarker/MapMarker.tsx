import React, { ReactNode } from "react";
import { Marker } from "react-map-gl";

export interface MapMarkerProps {
  lat: number;
  lng: number;
  onClick?: () => void;
  children?: ReactNode;
  color?: string;
  selected?: boolean;
}

export const MapMarker = (props: MapMarkerProps) => {
  const { lat, lng, children, color = "#3F3979", selected, onClick } = props;
  return (
    <Marker
      latitude={lat}
      longitude={lng}
      onClick={onClick}
      color={selected ? "#EBA701" : color}
    >
      {children}
    </Marker>
  );
};
