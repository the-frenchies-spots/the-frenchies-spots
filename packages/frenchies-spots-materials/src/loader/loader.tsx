import React from "react";
import { ActivityIndicator, type ActivityIndicatorProps } from "react-native";

import { theme, type TColors } from "@frenchies-spots/theme";

const themeColor = theme.TFS.colors;

interface LoaderProps extends Omit<ActivityIndicatorProps, "color"> {
  color?: TColors;
}

export const Loader = (props: LoaderProps) => {
  const { color = "yellow", ...other } = props;
  return <ActivityIndicator color={themeColor[color]} {...other} />;
};
