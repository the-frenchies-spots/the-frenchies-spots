import React from "react";
import { styles } from "./floating-button-styles";
import { ButtonBase, type ButtonBaseProps } from "../button-base";

interface FloatingButtonProps extends ButtonBaseProps {}

export const FloatingButton = (props: FloatingButtonProps) => {
  const { style, ...other } = props;
  return (
    <ButtonBase
      {...other}
      textColor={styles.text.color}
      buttonColor={styles.button.color}
      labelStyle={{ ...styles.label }}
      style={{ ...styles.global, ...style }}
      contentStyle={styles.content}
    />
  );
};
