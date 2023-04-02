import React from "react";
import { Controller, type Control, type FieldValues } from "react-hook-form";
import {
  Box,
  VStack,
  Caption,
  Checkbox,
  type CheckboxProps,
} from "@frenchies-spots/materials";

interface CheckboxControllerProps extends Omit<CheckboxProps, "value"> {
  control: Control<FieldValues, any> | any;
  name: string;
}

export const CheckboxController = (props: CheckboxControllerProps) => {
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
};
