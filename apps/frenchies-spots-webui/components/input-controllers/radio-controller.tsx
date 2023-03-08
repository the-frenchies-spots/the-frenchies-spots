import { Text, View } from "react-native";
import React from "react";
import { Controller, type Control, type FieldValues } from "react-hook-form";
import { InputGroup } from "../../materials/input-group/InputGroup";

interface RadioControllerProps {
  control: Control<FieldValues, any> | any;
  radioValue: string;
  label: string;
  name: string;
}

export const RadioController = (props: RadioControllerProps) => {
  const { control, label, name, radioValue } = props;
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, value, onBlur },
        fieldState: { error },
      }) => {
        return (
          <InputGroup
            inputType="radio"
            radioValue={radioValue}
            label={label}
            value={value}
            fullWidth={false}
            onRadioChange={onChange}
          />
        );
      }}
    />
  );
};
