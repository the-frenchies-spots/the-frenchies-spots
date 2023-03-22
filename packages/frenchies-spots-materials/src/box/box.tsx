import React from "react";
import {
  Box as NativeBox,
  BoxProps as NativeBoxProps,
} from "@react-native-material/core";

export const Box = (props: NativeBoxProps) => {
  const { ...other } = props;
  return <NativeBox {...other} />;
};
