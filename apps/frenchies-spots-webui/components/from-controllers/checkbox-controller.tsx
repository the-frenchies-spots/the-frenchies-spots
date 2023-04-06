import React from "react";
import { Controller, FieldPath, FieldValues } from "react-hook-form";
import {
  Box,
  VStack,
  Caption,
  Checkbox,
  type CheckboxProps,
} from "@frenchies-spots/materials";
import { FormControllerProps } from "./form-controller-type";

export function CheckboxController<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: FormControllerProps<TFieldValues, TFieldName> &
    Omit<CheckboxProps, "value">
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
              <Checkbox {...other} value={value} onChange={onChange} />
            </Box>
            {!!error && <Caption color="error">{error.message}</Caption>}
          </VStack>
        );
      }}
    />
  );
}
