import React, { useState, useCallback, useEffect } from "react";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import {
  AutocompleteInput,
  type AutocompleteInputProps,
} from "@frenchies-spots/materials";
import { useGeocoding } from "../../../hooks";
import { TCoordinate } from "../../../types";
import { debounce } from "lodash";

type SxProps = ViewStyle | TextStyle | ImageStyle;

type TLocation = {
  coordinate: TCoordinate;
  codeRegion: number;
  address: string;
};

export interface SearchAddressProps<T>
  extends Omit<AutocompleteInputProps<T>, "onChangeText" | "value" | "data"> {
  value?: TLocation;
  onChangeText?: (value: TLocation) => void;
  style?: SxProps;
}

export function SearchAddress<T>(props: SearchAddressProps<T>) {
  const {
    style = {},
    value: initValue = "",
    onChangeText,
    label,
    variant = "outlined",
    placeholder,
    ...other
  } = props;
  const [value, setValue] = useState<TLocation | undefined>(
    initValue as TLocation
  );
  const [addresses, setAddresses] = useState<string[]>([]);
  const { getSearchAddress, searchPlace, getCodeRegionByCoordinate } =
    useGeocoding();

  const handleChange = (address: string) => {
    setValue((current) => ({ ...current, address } as TLocation));
    handleDebounceChange(address);
  };

  const handleDebounceChange = useCallback(
    debounce((address: string) => {
      searchPlace(address).then((location) => {
        const { coordinates: coordinate } = location;
        const { lat, lng } = coordinate;
        getCodeRegionByCoordinate(lat, lng).then((codeRegion) => {
          setValue({ address, coordinate, codeRegion });
          if (typeof onChangeText === "function") {
            onChangeText({ address, coordinate, codeRegion } as TLocation);
          }
        });
      });
    }, 700),
    []
  );

  const handleTextChange = useCallback((value: string) => {
    handleChange(value);
    getSearchAddress(value).then(setAddresses);
  }, []);

  useEffect(() => {
    setValue(initValue as TLocation);
  }, [initValue]);

  return (
    <AutocompleteInput
      label={label}
      placeholder={placeholder}
      variant={variant}
      value={value?.address}
      autoCapitalize="none"
      autoCorrect={false}
      data={addresses}
      onChangeText={handleTextChange}
      style={style}
      onSelectSugest={(item) => {
        handleChange(item);
        setAddresses([]);
      }}
    />
  );
}
