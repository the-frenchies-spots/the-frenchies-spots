import React from "react";
import {
  TextInput as TextInputNative,
  type TextInputProps as TextInputPropsNative,
} from "react-native";

export interface TextInputProps extends Omit<TextInputPropsNative, "style"> {
  style: Record<string, string | number>;
}

export const TextInput = (props: TextInputProps) => {
  const { style = {}, ...other } = props;
  return <TextInputNative {...other} style={{ ...style }} />;
};
