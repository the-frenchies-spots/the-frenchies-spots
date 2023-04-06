import React, { ReactNode } from "react";
import { ButtonBase, type ButtonBaseProps } from "../button-base";
import { Button as ButtonPaper, type ButtonProps } from "react-native-paper";
import { styles } from "./primary-button-styles";
import { upperCase } from "lodash";

interface PrimaryButtonProps extends Omit<ButtonBaseProps, "children"> {
  variant?: "contained" | "outlined";
  children?: ReactNode;
  little?: boolean;
  width?: string | number;
  height?: string | number;
  fontSize?: number;
}
export const PrimaryButton = (props: PrimaryButtonProps) => {
  const {
    style = {},
    width,
    height,
    fontSize,
    variant = "contained",
    children,
    little = false,
    ...other
  } = props;
  const sx = styles(variant);
  return (
    <ButtonBase
      {...other}
      textColor={sx.text.color}
      buttonColor={sx.button.color}
      labelStyle={{ ...sx.label, fontSize }}
      style={{ ...sx.global, width, height, ...style }}
    >
      {typeof children === "string" && !little ? upperCase(children) : children}
    </ButtonBase>
  );
};
