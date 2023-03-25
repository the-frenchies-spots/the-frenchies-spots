import React from "react";
import {
  TextInput as TextInputNative,
  TextInputProps as TextInputPropsNative,
} from "react-native";
import { styles } from "./text-input-styles";

export type TextInputProps = TextInputPropsNative;

export const TextInput = (props: TextInputProps) => {
  const { style = {}, ...other } = props;
  const inputStyle = styles();
  return (
    <TextInputNative
      {...other}
      style={{ ...inputStyle.input, ...(style as Record<string, string>) }}
    />
  );
};
