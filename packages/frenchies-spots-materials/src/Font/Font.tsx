import React from "react";

import { Text, TextProps } from "@mantine/core";
import { useStyles } from "./Font.styles";
import { getColor } from "../utils/get-color";
import { TColor } from "../type";

enum ETitle {
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
}

type TitleKeys = keyof typeof ETitle;

interface FontProps extends TextProps {
  color?: TColor | string;
  variant?: TitleKeys | "body" | "subtitle1" | "subtitle2" | "caption";
}

export const Font = (props: FontProps) => {
  const { color, variant = "body", className, ...textProps } = props;
  const { cx, classes } = useStyles(getColor(color));
  const isTitle = Object.values(ETitle).includes(variant);
  return (
    <Text
      m={0}
      component={isTitle ? (variant as TitleKeys) : undefined}
      className={cx(classes[variant], className)}
      {...textProps}
    />
  );
};

Font.displayName = "@frenchies-spots/material/Font/Font";
