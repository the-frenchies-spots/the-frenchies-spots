import React, { useEffect, useState } from "react";
import { BodyText, Box, SubTitle, Text } from "@frenchies-spots/materials";
import { useGeocoding, useMapBox } from "../../../hooks";
import { styles } from "./location-picker-style";
import { getCodeRegionByCoordinate } from "../../../services";
import { MapBoxMarker, MapBox } from "../../map-box";
import { TCoordinate } from "../../../types/coordinate-type";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";
type SxProps = ViewStyle | TextStyle | ImageStyle;
import { Marker } from "react-map-gl";

type TLocation = { coordinate: TCoordinate; codeRegion: number, address: string };

export interface LocationPickerProps {
  onChange?: (value: TLocation) => void;
  value?: TLocation | undefined;
  style?: SxProps;
}

export const LocationPicker = (props: LocationPickerProps) => {
  const { style = {}, value = undefined, onChange } = props;

  const [locationValue, setLocationValue] = useState<TLocation | undefined>(
    value
  );
  const { searchPlace } = useGeocoding();

  const { viewport, coordinate, onViewportChange, onCoordinateClick } =
    useMapBox();

  useEffect(() => {
    if (typeof coordinate !== "undefined") {
      const { lat, lng } = coordinate;
      getCodeRegionByCoordinate(lat, lng).then((codeRegion) => {
        if (typeof codeRegion === "number") {
          searchPlace(`${lng},${lat}`).then((address) => {
            const res = { coordinate, codeRegion, address: address.placeName }
            setLocationValue(res);
            if (typeof onChange === "function") {
              onChange(res);
            }
          });
          }
      });
    }
  }, [coordinate]);

  return (
    <Box style={{ ...styles.container, ...style }}>
      <MapBox
        viewport={viewport}
        onViewportChange={onViewportChange}
        onCoordinateClick={onCoordinateClick}
      >
        {locationValue?.coordinate && (
          <MapBoxMarker
            lat={locationValue.coordinate.lat}
            lng={locationValue.coordinate.lng}
          />
        )}
      </MapBox>
      <Box style={styles.coordinateContainer}>
        <Text style={styles.coordinates}>
          <BodyText>Lat: </BodyText>
          <SubTitle variant="sub1">
            {locationValue?.coordinate.lat || 0}
          </SubTitle>
          <BodyText> Lng: </BodyText>
          <SubTitle variant="sub1">
            {locationValue?.coordinate.lng || 0}
          </SubTitle>
        </Text>
      </Box>
    </Box>
  );
};
