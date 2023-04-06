import React from "react";
import { Icon } from "@frenchies-spots/materials";
import { TouchableOpacity } from "react-native";
import { styles } from "./back-button-styles";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import { useNavigation } from "../../../../hooks";

type SxProps = ViewStyle | TextStyle | ImageStyle;

interface BackButtonProps {
  style?: SxProps;
}

export const BackButton = (props: BackButtonProps) => {
  const { style } = props;
  const { goBack } = useNavigation();

  return (
    <TouchableOpacity
      style={{ ...styles.container, ...style }}
      onPress={goBack}
    >
      <Icon name="arrow-back-ios" color="white" size={22} />
    </TouchableOpacity>
  );
};
