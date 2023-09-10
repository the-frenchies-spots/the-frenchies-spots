import React from "react";

import {
  Title as MantineTitle,
  TitleProps as MantineTitleProps,
} from "@mantine/core";
import { useStyles } from "./Title.styles";
import { TypographyVariants } from "../Typography";
import { defaultColor } from "../../utils";

interface TitleProps extends Omit<MantineTitleProps, "variant" | "color"> {
  variant?: keyof typeof TypographyVariants;
  color?: keyof typeof defaultColor;
}

const Title = (props: TitleProps) => {
  const { variant = "body", color, className, ...titleProps } = props;

  const { classes, cx } = useStyles({ variant, color });

  return (
    <MantineTitle className={cx(classes.title, className)} {...titleProps} />
  );
};

export default Title;
