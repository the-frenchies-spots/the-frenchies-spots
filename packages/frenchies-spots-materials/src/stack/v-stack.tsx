import React from "react";
import {
  VStack as VNativeStack,
  VStackProps as VNativeStackProps,
} from "@react-native-material/core";

export type VStackProps = VNativeStackProps;

export const VStack = (props: VStackProps) => {
  const { ...other } = props;
  return <VNativeStack {...other} />;
};
