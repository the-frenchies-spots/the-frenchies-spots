import React from "react";
import { Text, type TextProps } from "../text";
import { styles } from "./title-styles";

export type TVariant = "h1" | "h2" | "h3" | "h4" | "h5";

export interface TitleProps extends TextProps {
  variant?: TVariant;
}

export const Title = (props: TitleProps) => {
  const { variant = "h1", ...other } = props;
  return <Text {...other} style={styles[variant]} />;
};
