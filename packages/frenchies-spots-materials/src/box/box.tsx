import React from "react";
import {
  Box as NativeBox,
  BoxProps as NativeBoxProps,
} from "@react-native-material/core";

export type BoxProps = NativeBoxProps;

export const Box = (props: BoxProps) => {
  const { ...other } = props;
  return <NativeBox {...other} />;
};
