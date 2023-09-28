import React, { useState } from "react";

import { Box, fonts } from "@frenchies-spots/material";
import { AutocompleteAddress } from "./../AutocompleteAddress/AutocompleteAddress";
import { LocationPicker } from "./../LocationPicker/LocationPicker";
import { SelectRegion } from "../SelectRegion/SelectRegion";
import { TLocation } from "../../../hooks/use-geocoding/use-geocoding";
import { useRegion } from "../../../hooks";

import { useStyles } from "./LocationManager.styles";

export type TLocationData = { location: TLocation; codeRegion: string };

interface LocationManagerProps {
  value?: TLocationData;
  onChange?: (newValue: TLocationData) => void;
}

export const LocationManager = ({ value, onChange }: LocationManagerProps) => {
  const { getCodeRegionByCoordinate } = useRegion();
  const [locationData, setLocationData] = useState<TLocationData | undefined>(
    value
  );

  const { classes } = useStyles();

  const handleChange = async (newData: TLocation) => {
    const { lat, lng } = newData.coordinates;
    const codeRegion = await getCodeRegionByCoordinate(lat, lng);
    const result = { location: newData, codeRegion };
    if (typeof onChange === "function") {
      onChange(result);
    }
    setLocationData(result);
  };

  return (
    <Box className={classes.container}>
      <AutocompleteAddress
        label="Rechercher une adresse"
        placeholder="Taper une adresse"
        value={locationData?.location?.value}
        onChange={handleChange}
        sx={(theme) => ({
          ".mantine-Autocomplete-input": {
            backgroundColor: theme.colors.lightBluePurple[0],
            color: theme.colors.darkPurple[0],
            ...fonts["Montserrat-Regular"].style,
            fontSize: 16,
            fontStyle: "normal",
            fontWeight: 400,
            boxShadow: "0px 4px 8px 0px #DBDBDB",
          },
          ".mantine-Autocomplete-label": {
            color: theme.colors.darkPurple[0],
            ...fonts["Montserrat-Regular"].style,
            fontSize: 16,
            fontStyle: "normal",
            fontWeight: 400,
          },
        })}
      />
      <Box className={classes.locationPicker}>
        <LocationPicker
          value={locationData?.location}
          onChange={handleChange}
        />
      </Box>
      {/* <SelectRegion
        value={locationData?.codeRegion}
        placeholder="region"
        readOnly
      /> */}
    </Box>
  );
};
