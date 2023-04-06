import React from "react";
import {
  Divider as DividerPaper,
  DividerProps as DividerPropsPaper,
} from "react-native-paper";

interface DividerProps extends DividerPropsPaper {}

export const Divider = (props: DividerProps) => {
  const { ...other } = props;
  return <DividerPaper {...other} />;
};
