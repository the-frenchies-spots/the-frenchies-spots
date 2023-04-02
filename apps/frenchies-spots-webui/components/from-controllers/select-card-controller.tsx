import React from "react";
import { Controller, type Control, type FieldValues } from "react-hook-form";
import {
  Box,
  VStack,
  Caption,
  SelectCard,
  type SelectCardProps,
} from "@frenchies-spots/materials";

interface SelectCardControllerProps extends Omit<SelectCardProps, "value"> {
  control: Control<FieldValues, any> | any;
  name: string;
}

export const SelectCardController = (props: SelectCardControllerProps) => {
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
};
