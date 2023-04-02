import React from "react";
import { Controller, type Control, type FieldValues } from "react-hook-form";
import {
  Box,
  VStack,
  Caption,
  MultipleImagePicker,
  type MultipleImagePickerProps,
} from "@frenchies-spots/materials";

interface MultipleImagePickerControllerProps
  extends Omit<MultipleImagePickerProps, "value"> {
  control: Control<FieldValues, any> | any;
  name: string;
}

export const MultipleImagePickerController = (
  props: MultipleImagePickerControllerProps
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
              <MultipleImagePicker
                {...other}
                value={value}
                onChange={onChange}
              />
            </Box>
            {!!error && <Caption color="error">{error.message}</Caption>}
          </VStack>
        );
      }}
    />
  );
};
