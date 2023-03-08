import React from "react";
import {
  Stack as NativeStack,
  StackProps as NativeStackProps,
} from "@react-native-material/core";

export type StackProps = NativeStackProps;

const Stack = (props: StackProps) => {
  const { children } = props;
  return <NativeStack {...props}>{children}</NativeStack>;
};

export default Stack;
