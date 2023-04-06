import React from "react";
import {
  Controller,
  type Control,
  type FieldValues,
  FieldPath,
} from "react-hook-form";
import {
  Box,
  VStack,
  Caption,
  SelectTag,
  type SelectTagProps,
} from "@frenchies-spots/materials";
import { FormControllerProps } from "./form-controller-type";

export function SelectTagController<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: FormControllerProps<TFieldValues, TFieldName> &
    Omit<SelectTagProps, "value">
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
              <SelectTag {...other} value={value} onChange={onChange} />
            </Box>
            {!!error && <Caption color="error">{error.message}</Caption>}
          </VStack>
        );
      }}
    />
  );
}
