import React from "react";
import { styles } from "./floating-button-styles";
import { ButtonBase, type ButtonBaseProps } from "../button-base";
import { StyleSheet, View, Text } from "react-native";

interface FloatingButtonProps extends ButtonBaseProps {}

export const FloatingButton = (props: FloatingButtonProps) => {
  const { ...other } = props;
  return (
    <ButtonBase
      {...other}
      textColor={styles.text.color}
      buttonColor={styles.button.color}
      labelStyle={styles.label}
      style={styles.global}
    />
  );
};
