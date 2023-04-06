import React from "react";
import { Button as ButtonPaper, type ButtonProps } from "react-native-paper";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";

type SxProps = ViewStyle | TextStyle | ImageStyle;

export interface ButtonBaseProps extends Omit<ButtonProps, "style"> {
  style?: SxProps;
}

export const ButtonBase = (props: ButtonBaseProps) => {
  const { style = {}, ...other } = props;
  return <ButtonPaper style={style} {...other} />;
};
