import React from "react";
import { Icon } from "@frenchies-spots/materials";
import { TouchableOpacity } from "react-native";
import { styles } from "./back-button-styles";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";

type SxProps = ViewStyle | TextStyle | ImageStyle;

interface BackButtonProps {
  style?: SxProps;
}

export const BackButton = (props: BackButtonProps) => {
  const { style } = props;
  return (
    <TouchableOpacity style={{ ...styles.container, ...style }}>
      <Icon name="arrow-back-ios" color="white" size={22} />
    </TouchableOpacity>
  );
};
