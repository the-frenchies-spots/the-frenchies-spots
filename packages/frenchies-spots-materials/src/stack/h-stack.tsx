import React from "react";
import {
  HStack as HNativeStack,
  HStackProps as HNativeStackProps,
} from "@react-native-material/core";

export type HStackProps = HNativeStackProps;

export const HStack = (props: HStackProps) => {
  const { ...other } = props;
  return <HNativeStack {...other} />;
};
