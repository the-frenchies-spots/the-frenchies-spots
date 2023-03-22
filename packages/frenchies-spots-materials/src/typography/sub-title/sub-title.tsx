import React from "react";
import { Text, type TextProps } from "../text";
import { styles } from "./sub-title-styles";

export type TSubTitlePropsVariant = "sub1" | "sub2";

export interface SubTitleProps extends TextProps {
  variant?: TSubTitlePropsVariant;
}

export const SubTitle = (props: SubTitleProps) => {
  const { variant = "sub1", ...other } = props;
  return <Text {...other} style={styles[variant]} />;
};
