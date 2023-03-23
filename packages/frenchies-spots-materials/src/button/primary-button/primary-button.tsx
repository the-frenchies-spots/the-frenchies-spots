import React, { ReactNode } from "react";
import { ButtonBase, type ButtonBaseProps } from "../button-base";
import { styles } from "./primary-button-styles";
import { upperCase } from "lodash";

interface PrimaryButtonProps extends Omit<ButtonBaseProps, "children"> {
  variant?: "contained" | "outlined";
  children: ReactNode;
  little?: boolean;
}
export const PrimaryButton = (props: PrimaryButtonProps) => {
  const { variant = "contained", children, little = false, ...other } = props;
  const style = styles(variant);
  return (
    <ButtonBase
      {...other}
      textColor={style.text.color}
      buttonColor={style.button.color}
      labelStyle={style.label}
      style={style.global}
    >
      {typeof children === "string" && !little ? upperCase(children) : children}
    </ButtonBase>
  );
};
