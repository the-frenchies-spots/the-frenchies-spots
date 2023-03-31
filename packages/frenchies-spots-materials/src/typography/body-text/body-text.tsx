import React from "react";
import { Text, type TextProps } from "../text";
import { styles } from "./body-text-styles";
import { theme } from "@frenchies-spots/theme";

type TColors = keyof typeof theme.TFS.colors;
interface BodyTextProps extends TextProps {
  color?: TColors;
}

export const BodyText = (props: BodyTextProps) => {
  const { style, color, ...other } = props;

  return (
    <Text
      {...other}
      style={{
        // ...(style as Object),
        ...(color
          ? { ...styles.body, color: theme.TFS.colors[color] }
          : styles.body),
      }}
    />
  );
};
