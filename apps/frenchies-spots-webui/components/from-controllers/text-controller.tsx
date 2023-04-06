import React from "react";
import { Controller, type FieldValues, FieldPath } from "react-hook-form";
import {
  Box,
  VStack,
  TextInput,
  Caption,
  type TextInputProps,
} from "@frenchies-spots/materials";
import { FormControllerProps } from "./form-controller-type";

export function TextController<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(props: FormControllerProps<TFieldValues, TFieldName> & TextInputProps) {
  const { control, name, ...other } = props;
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, value = "", onBlur },
        fieldState: { error },
      }) => {
        return (
          <VStack spacing={5}>
            <Box>
              <TextInput
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
