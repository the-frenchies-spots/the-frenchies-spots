import React from "react";
import { Text as TextNative, TextProps as TextPropsNative } from "react-native";

export interface TextProps extends TextPropsNative {}

export const Text = (props: TextProps) => {
  const { ...other } = props;
  return <TextNative {...other} />;
};
