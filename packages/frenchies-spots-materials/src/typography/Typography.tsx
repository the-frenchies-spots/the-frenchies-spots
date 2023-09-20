import React from "react";

import { Text, TextProps } from "@mantine/core";
import { useStyles } from "./Typography.styles";
import { getColor } from "../utils/get-color";
import { TColor } from "../type";

interface TypographyProps extends TextProps {
  color?: TColor;
}

const Typography = (props: TypographyProps) => {
  const { color, className, ...textProps } = props;
  const { cx, classes } = useStyles(getColor(color));
  return (
    <Text component="h1" {...textProps} className={cx(classes.h1, className)} />
  );
};

Typography.displayName = "@frenchies-spots/material/Typography/Typography";

export default Typography;
