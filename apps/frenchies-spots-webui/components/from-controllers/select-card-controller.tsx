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
  SelectCard,
  type SelectCardProps,
} from "@frenchies-spots/materials";
import { FormControllerProps } from "./form-controller-type";

export function SelectCardController<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: FormControllerProps<TFieldValues, TFieldName> &
    Omit<SelectCardProps, "value">
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
              <SelectCard {...other} value={value} onChange={onChange} />
            </Box>
            {!!error && <Caption color="error">{error.message}</Caption>}
          </VStack>
        );
      }}
    />
  );
}
