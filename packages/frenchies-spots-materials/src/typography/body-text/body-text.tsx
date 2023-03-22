import React from "react";
import { Text, type TextProps } from "../text";
import { styles } from "./body-text-styles";

export type BodyTextProps = TextProps;

export const BodyText = (props: BodyTextProps) => {
  const { ...other } = props;
  return <Text {...other} style={styles.body} />;
};
