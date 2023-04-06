import React from "react";
import { Controller, FieldPath, FieldValues } from "react-hook-form";
import { FormControllerProps } from "./form-controller-type";
import {
  Box,
  VStack,
  Caption,
  MultipleImagePicker,
  type MultipleImagePickerProps,
} from "@frenchies-spots/materials";

export function MultipleImagePickerController<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: FormControllerProps<TFieldValues, TFieldName> &
    Omit<MultipleImagePickerProps, "value">
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
}
