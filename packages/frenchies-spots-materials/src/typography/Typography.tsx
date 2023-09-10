import React, { ReactNode } from "react";
import { Sx, Text } from "@mantine/core";
import Title from "./Title/Title";
import { defaultColor } from "../utils";

export enum TypographyVariants {
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "body",
  "subTitle1",
  "subTitle2",
  "caption",
}

interface TypographyProps {
  children: ReactNode;
  variant?: keyof typeof TypographyVariants;
  sx?: Sx;
  color?: keyof typeof defaultColor;
}

export const Typography = (props: TypographyProps) => {
  const { children, color, variant = "body", sx } = props;

  let Component: React.FC<{
    children: ReactNode;
    sx?: Sx;
    variant?: keyof typeof TypographyVariants;
    color?: keyof typeof defaultColor & string;
  }>;

  switch (variant) {
    case "h1":
      Component = Title;
      break;
    // case TypographyVariants.H1:
    //   Component = Text;
    //   break;
    // case TypographyVariants.H1:
    //   Component = Text;
    //   break;
    default:
      Component = Title;
  }

  return (
    <Component sx={sx} variant={variant} color={color}>
      {children}
    </Component>
  );
};

Typography.displayName = "@frenchies-spots/material/Typography/Typography";
