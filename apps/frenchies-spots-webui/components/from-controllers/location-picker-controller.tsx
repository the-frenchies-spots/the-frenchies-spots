import React from "react";
import { Controller, type Control, type FieldValues } from "react-hook-form";
import { Box, VStack, Caption } from "@frenchies-spots/materials";
import { LocationPicker, LocationPickerProps } from "../custom-input";

interface LocationPickerControllerProps
  extends Omit<LocationPickerProps, "value"> {
  control: Control<FieldValues, any> | any;
  name: string;
}

export const LocationPickerController = (
  props: LocationPickerControllerProps
) => {
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
};
