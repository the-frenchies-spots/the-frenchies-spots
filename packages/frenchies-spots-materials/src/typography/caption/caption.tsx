import React from "react";
import { Text, type TextProps } from "../text";
import { styles } from "./caption-styles";

export type CaptionProps = TextProps;

export const Caption = (props: CaptionProps) => {
  const { ...other } = props;
  return <Text {...other} style={styles.caption} />;
};
