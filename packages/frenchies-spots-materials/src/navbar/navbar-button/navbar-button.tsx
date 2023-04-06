import React from "react";
import { TouchableOpacity, type TouchableOpacityProps } from "react-native";
import { Icon, type IconProps } from "../../icon";
import { styles } from "./navbar-button-styles";

interface NavbarButtonProps
  extends TouchableOpacityProps,
    Omit<IconProps, "style"> {
  isSelected?: boolean;
}

export const NavbarButton = (props: NavbarButtonProps) => {
  const {
    name,
    size = 20,
    color = "white",
    isSelected = false,
    ...other
  } = props;

  const style = styles(isSelected);
  return (
    <TouchableOpacity {...other} style={style.button}>
      <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};
