import React from "react";
import { Controller, type Control, type FieldValues } from "react-hook-form";
import {
  Box,
  VStack,
  Caption,
  SelectTag,
  type SelectTagProps,
} from "@frenchies-spots/materials";

interface SelectTagControllerProps extends Omit<SelectTagProps, "value"> {
  control: Control<FieldValues, any> | any;
  name: string;
}

export const SelectTagController = (props: SelectTagControllerProps) => {
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
};
