import React, { useCallback, useEffect, useState } from "react";

import { debounce, cloneDeep } from "lodash";
import { Autocomplete } from "@frenchies-spots/material";
import {
  TLocation,
  useGeocoding,
} from "./../../../hooks/use-geocoding/use-geocoding";

interface AutocompleteAddressProps {
  value?: string;
  onChange?: (newLocation: TLocation) => void;
}

export const AutocompleteAddress = ({
  value: initValue = "",
  onChange,
}: AutocompleteAddressProps) => {
  const [addresses, setAddresses] = useState<TLocation[]>([]);
  const [value, setValue] = useState(initValue);

  useEffect(() => {
    setValue(initValue);
  }, [initValue]);

  const { getSearchAddress } = useGeocoding();

  const handleTextChange = (newValue: string) => {
    setValue(newValue);
    setAddresses([]);
    handleDebounceChange(newValue);
  };

  const handleDebounceChange = useCallback(
    debounce((address: string) => {
      getSearchAddress(address).then((res) => {
        setAddresses(cloneDeep(res));
      });
    }, 700),
    []
  );

  const handleItemSubmit = (item: TLocation) => {
    if (typeof onChange === "function") {
      onChange(item);
    }
  };

  return (
    <>
      <Autocomplete
        value={value}
        onChange={handleTextChange}
        onItemSubmit={handleItemSubmit}
        label="Address"
        placeholder="search address"
        data={addresses}
      />
    </>
  );
};

export default AutocompleteAddress;
