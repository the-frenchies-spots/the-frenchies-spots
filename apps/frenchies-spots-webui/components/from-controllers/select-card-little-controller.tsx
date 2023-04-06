import React from "react";
import { Controller, type FieldValues, FieldPath } from "react-hook-form";
import {
  Box,
  VStack,
  Caption,
  SelectCardLittle,
  type SelectCardLittleProps,
} from "@frenchies-spots/materials";
import { FormControllerProps } from "./form-controller-type";

export function SelectCardLittleController<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: FormControllerProps<TFieldValues, TFieldName> &
    Omit<SelectCardLittleProps, "value">
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
              <SelectCardLittle {...other} value={value} onChange={onChange} />
            </Box>
            {!!error && <Caption color="error">{error.message}</Caption>}
          </VStack>
        );
      }}
    />
  );
}
