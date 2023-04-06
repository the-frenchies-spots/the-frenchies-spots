import React from "react";
import { Controller, type FieldValues, FieldPath } from "react-hook-form";
import { Box, VStack, Caption } from "@frenchies-spots/materials";
import { SearchAddress, type SearchAddressProps } from "../custom-input";
import { FormControllerProps } from "./form-controller-type";

export function SearchAddressController<
  T,
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: FormControllerProps<TFieldValues, TFieldName> & SearchAddressProps<T>
) {
  const { control, name, ...other } = props;
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, value, onBlur },
        fieldState: { error },
      }) => {
        return (
          <VStack spacing={5} style={{ zIndex: 200 }}>
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
}
