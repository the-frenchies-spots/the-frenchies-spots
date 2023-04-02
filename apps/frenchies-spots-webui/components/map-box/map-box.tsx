import React, { type ReactNode } from "react";
import { Platform, Text } from "react-native";
import { MapAndroid } from "./map/map-android";
import { MapWeb } from "./map/map-web";
import { TViewport, TCoordinate } from "../../types";

interface MapBoxProps {
  viewport: TViewport;
  onViewportChange?: (newViewport: TViewport) => void;
  onCoordinateClick?: (coordinate: TCoordinate | undefined) => void;
  children?: ReactNode;
}

export const MapBox = (props: MapBoxProps) => {
  switch (Platform.OS) {
    case "web":
      return <MapWeb {...props} />;
    case "android":
      return <MapAndroid />;
    default:
      return <Text>Pas encore dévelopé</Text>;
  }
};
