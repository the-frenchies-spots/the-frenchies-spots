import { Text, View } from "react-native";
import React from "react";
import { Controller, type Control, type FieldValues } from "react-hook-form";
import { InputGroup } from "../../materials/input-group/InputGroup";

interface SwitchController {
  control: Control<FieldValues, any> | any;
  label: string;
  name: string;
}

export const SwitchController = (props: SwitchController) => {
  const { control, label, name } = props;
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, value = false, onBlur },
        fieldState: { error },
      }) => {
        return (
          <InputGroup
            inputType="switch"
            label={label}
            value={value}
            fullWidth={false}
            onToggle={onChange}
          />
        );
      }}
    />
  );
};
