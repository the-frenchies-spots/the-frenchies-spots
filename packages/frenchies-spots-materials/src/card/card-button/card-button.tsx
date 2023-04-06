import React from "react";
import { TouchableOpacity, type TouchableOpacityProps } from "react-native";
import { Icon, type IconProps } from "../../icon";
import { Loader } from "../../loader";
import { styles } from "./card-button-styles";
import type { TColors } from "@frenchies-spots/theme";

export interface CardButtonProps extends TouchableOpacityProps {
  icon?: IconProps["name"];
  isLoading?: boolean;
  color?: TColors;
}

export const CardButton = (props: CardButtonProps) => {
  const {
    icon = "heart",
    color = "yellow",
    isLoading = false,
    ...other
  } = props;
  const style = styles(color);
  return (
    <TouchableOpacity style={style.cardButton} {...other}>
      {isLoading ? (
        <Loader color={color} size="small" />
      ) : (
        <Icon name={icon} size={25} color={color} />
      )}
    </TouchableOpacity>
  );
};
