import React, { useEffect, useState } from "react";

import {
  TLocation,
  useGeocoding,
} from "../../../hooks/use-geocoding/use-geocoding";
import { useMap } from "../../../hooks";
import { Map } from "../../Map/Map";
import { MapMarker } from "../../Marker";
import { useStyles } from "./LocarionPicker.styles";
import { Box } from "@frenchies-spots/material";

interface LocationPickerProps {
  onChange?: (value: TLocation) => void;
  value?: TLocation | undefined;
  style?: React.CSSProperties;
}

export const LocationPicker = (props: LocationPickerProps) => {
  const { value, style, onChange } = props;
  const [locationValue, setLocationValue] = useState<TLocation | undefined>(
    value
  );

  const { searchPlace } = useGeocoding();
  const { viewport, coordinates, onViewportChange, onCoordinateClick } =
    useMap();

  useEffect(() => {
    setLocationValue(value);
  }, [value]);

  useEffect(() => {
    if (typeof coordinates !== "undefined") {
      const { lat, lng } = coordinates;
      searchPlace(`${lng},${lat}`).then((address) => {
        const res = { coordinates, value: address.placeName };
        setLocationValue(res);
        if (typeof onChange === "function") {
          onChange(res);
        }
      });
    }
  }, [coordinates]);

  return (
    <Map
      viewport={viewport}
      onViewportChange={onViewportChange}
      onCoordinateClick={onCoordinateClick}
      style={{ borderRadius: 10 }}
    >
      {locationValue?.coordinates && (
        <MapMarker
          lat={locationValue.coordinates.lat}
          lng={locationValue.coordinates.lng}
        />
      )}
    </Map>
  );
};

export default LocationPicker;
