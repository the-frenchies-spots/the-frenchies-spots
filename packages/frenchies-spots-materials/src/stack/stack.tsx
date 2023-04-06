import React from "react";
import {
  Stack as NativeStack,
  StackProps as NativeStackProps,
} from "@react-native-material/core";

export type StackProps = NativeStackProps;

export const Stack = (props: StackProps) => {
  const { ...other } = props;
  return <NativeStack {...other} />;
};
