import React from "react";

import { Text, TextProps } from "@mantine/core";
import { useStyles } from "./Font.styles";
import { getColor } from "../utils/get-color";
import { TColor } from "../type";

interface FontProps extends TextProps {
  color?: TColor;
}

export const Font = (props: FontProps) => {
  const { color, className, ...textProps } = props;
  const { cx, classes } = useStyles(getColor(color));
  return (
    <Text component="h1" {...textProps} className={cx(classes.h1, className)} />
  );
};

Font.displayName = "@frenchies-spots/material/Font/Font";
