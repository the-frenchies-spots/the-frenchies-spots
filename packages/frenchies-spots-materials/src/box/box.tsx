import React from "react";
import {
  Box as NativeBox,
  BoxProps as NativeBoxProps,
} from "@react-native-material/core";

export type BoxProps = NativeBoxProps;

const Box = (props: BoxProps) => {
  const { ...other } = props;
  return <NativeBox {...other} />;
};

export default Box;
