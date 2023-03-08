import React from "react";
import {
  Switch as SwicthNativeMaterial,
  SwitchProps as SwitchNativeProps,
} from "@react-native-material/core";

interface SwitchProps extends SwitchNativeProps {}

export const Switch = (props: SwitchProps) => {
  const { ...other } = props;
  return <SwicthNativeMaterial {...other} />;
};
