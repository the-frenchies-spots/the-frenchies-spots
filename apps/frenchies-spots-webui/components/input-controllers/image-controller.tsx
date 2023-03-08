import { Text, View } from "react-native";
import React from "react";
import { Controller, type Control, type FieldValues } from "react-hook-form";
import { InputGroup } from "../../materials/input-group/InputGroup";

interface ImageControllerProps {
  control: Control<FieldValues, any> | any;
  label?: string;
  name: string;
}

export const ImageController = (props: ImageControllerProps) => {
  const { control, label, name } = props;
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, value = "", onBlur },
        fieldState: { error },
      }) => (
        <InputGroup inputType="image" value={value} onImageChange={onChange} />
      )}
    />
  );
};
