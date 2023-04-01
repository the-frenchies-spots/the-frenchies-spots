import React from "react";
import {
  Wrap as WrapMaterial,
  type WrapProps as WrapMaterialProps,
} from "@react-native-material/core";

type WrapProps = WrapMaterialProps;

export const Wrap = (props: WrapProps) => {
  const { ...other } = props;
  return <WrapMaterial {...other} />;
};
