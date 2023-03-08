import React from "react";
import { Controller, type Control, type FieldValues } from "react-hook-form";
import { InputGroup } from "../../materials/input-group/InputGroup";

interface TextControllerProps {
  control: Control<FieldValues, any> | any;
  label?: string;
  name: string;
  placeholder?: string;
  isMultiline?: boolean;
}

export const TextController = (props: TextControllerProps) => {
  const { control, label, name, placeholder = "", isMultiline = false } = props;
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, value = "", onBlur },
        fieldState: { error },
      }) => (
        <InputGroup
          inputType="text"
          label={label}
          value={value}
          placeholder={placeholder}
          type={"default"}
          onChangeText={onChange}
          isMultiline={isMultiline}
        />
      )}
    />
  );
};
