import React from "react";
import {
  Controller,
  type Control,
  type FieldValues,
  FieldPath,
} from "react-hook-form";
import { Box, VStack, Caption } from "@frenchies-spots/materials";
import { LocationPicker, LocationPickerProps } from "../custom-input";
import { FormControllerProps } from "./form-controller-type";

export function LocationPickerController<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: FormControllerProps<TFieldValues, TFieldName> &
    Omit<LocationPickerProps, "value">
) {
  const { control, name, ...other } = props;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <VStack spacing={5}>
            <Box>
              <LocationPicker {...other} value={value} onChange={onChange} />
            </Box>
            {!!error && <Caption color="error">{error.message}</Caption>}
          </VStack>
        );
      }}
    />
  );
}
