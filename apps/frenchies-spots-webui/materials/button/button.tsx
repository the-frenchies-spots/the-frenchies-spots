import React, { ReactNode } from "react";
import {
  View,
  Text,
  Pressable,
  PressableProps,
  ActivityIndicator,
} from "react-native";
import { useTheme } from "../../hooks";
import { styles } from "./button-styles";
import { StyleParamType } from "./style-param-type";

export interface ButtonProps extends PressableProps {
  children?: ReactNode;
  color?: StyleParamType["color"];
  variant?: StyleParamType["variant"];
  onPress?: () => void;
  isIconButton?: boolean;
  isLoading?: boolean;
}

export const Button = (props: ButtonProps) => {
  const {
    color = "primary",
    variant = "contained",
    children = null,
    onPress,
    isIconButton = false,
    style = {},
    isLoading = false,
    ...other
  } = props;
  const buttonStyle = useTheme<StyleParamType>(styles, { color, variant });

  return (
    <Pressable
      onPress={onPress}
      {...other}
      style={{ ...buttonStyle.button, ...(style as Record<string, string>) }}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <>
          {isIconButton ? (
            children
          ) : (
            <Text style={buttonStyle.text}>{children}</Text>
          )}
        </>
      )}
    </Pressable>
  );
};
