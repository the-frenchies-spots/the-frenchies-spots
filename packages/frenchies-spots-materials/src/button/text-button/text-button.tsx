import React from "react";
import { styles } from "./text-button-styles";
import { ButtonBase, type ButtonBaseProps } from "../button-base";

interface TextButtonProps extends ButtonBaseProps {
  variant?: "default" | "action";
}

export const TextButton = (props: TextButtonProps) => {
  const { variant = "action", ...other } = props;

  const style = styles(variant);

  return (
    <ButtonBase
      {...other}
      mode="text"
      textColor={style.text.color}
      labelStyle={style.label}
    />
  );
};
