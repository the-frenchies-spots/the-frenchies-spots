import React from "react";
import { Text, type TextProps } from "../text";
import { styles } from "./title-styles";
import { theme } from "@frenchies-spots/theme";

export type TColors = keyof typeof theme.TFS.colors;

export type TVariant = "h1" | "h2" | "h3" | "h4" | "h5";

export interface TitleProps extends TextProps {
  variant?: TVariant;
  color?: TColors;
}

export const Title = (props: TitleProps) => {
  const { variant = "h1", style, color, ...other } = props;
  return (
    <Text
      {...other}
      style={{
        ...(style as Object),
        ...(color
          ? { ...styles[variant], color: theme.TFS.colors[color] }
          : styles[variant]),
      }}
    />
  );
};
