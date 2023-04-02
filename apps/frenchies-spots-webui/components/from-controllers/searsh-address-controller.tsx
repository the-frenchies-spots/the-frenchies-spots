import React from "react";
import { Controller, type Control, type FieldValues } from "react-hook-form";
import {
  Box,
  VStack,
  Caption,
} from "@frenchies-spots/materials";
import { SearchAddress, type  SearchAddressProps} from "../custom-input";

interface SearchAddressControllerProps<T> extends SearchAddressProps<T> {
  control: Control<FieldValues, any> | any;
  name: string;
}

export function SearchAddressController<T>(props: SearchAddressControllerProps<T>) {
  const { control, name, ...other } = props;
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, value = "", onBlur },
        fieldState: { error },
      }) => {
        return (
          <VStack spacing={5} style={{zIndex: 200}}>
            <Box>
              <SearchAddress
                {...other}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                isError={error != undefined}
              />
            </Box>
            {!!error && <Caption color="error">{error.message}</Caption>}
          </VStack>
        );
      }}
    />
  );
};
