import React, { ReactNode } from "react";
import { Platform, Text } from "react-native";
import { MarkerWeb } from "./marker/marker-web";

interface MapBoxMarkerProps {
  lat: number;
  lng: number;
  children?: ReactNode;
  onPress?: () => void;
}

export const MapBoxMarker = (props: MapBoxMarkerProps) => {
  switch (Platform.OS) {
    case "web":
      return <MarkerWeb {...props} />;
    case "android":
      return <Text>Pas encore dévelopé</Text>;
    default:
      return <Text>Pas encore dévelopé</Text>;
  }
};
