import React from "react";
import { Text, type TextProps } from "../text";
import { styles } from "./caption-styles";
import { theme } from "@frenchies-spots/theme";

export type TColors = keyof typeof theme.TFS.colors;

export interface CaptionProps extends TextProps {
  color?: TColors;
}

export const Caption = (props: CaptionProps) => {
  const { color = "darkGrey", ...other } = props;
  return (
    <Text
      {...other}
      style={{ ...styles.caption, color: theme.TFS.colors[color] }}
    />
  );
};
