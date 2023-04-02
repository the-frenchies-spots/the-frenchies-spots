import React from "react";
import { Controller, type Control, type FieldValues } from "react-hook-form";
import {
  Box,
  VStack,
  TextInput,
  Caption,
  type TextInputProps,
} from "@frenchies-spots/materials";

interface TextControllerProps extends TextInputProps {
  control: Control<FieldValues, any> | any;
  name: string;
}

export const TextController = (props: TextControllerProps) => {
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
};
