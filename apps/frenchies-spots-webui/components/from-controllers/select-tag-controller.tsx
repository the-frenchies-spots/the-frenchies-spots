import React from "react";
import { Controller, type FieldValues, FieldPath } from "react-hook-form";
import { Box, VStack, Caption } from "@frenchies-spots/materials";
import { FormControllerProps } from "./form-controller-type";
import { SelectSpotTag, SelectSpotTagProps } from "../custom-input";

export function SelectTagController<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: FormControllerProps<TFieldValues, TFieldName> &
    Omit<SelectSpotTagProps, "value">
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
              <SelectSpotTag {...other} value={value} onChange={onChange} />
            </Box>
            {!!error && <Caption color="error">{error.message}</Caption>}
          </VStack>
        );
      }}
    />
  );
}
