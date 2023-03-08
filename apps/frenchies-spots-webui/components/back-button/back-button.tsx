import React from "react";
import { View } from "react-native";
import { Button } from "../../materials";
import { useNavigation } from "../../hooks";
import { IconButton } from "../../materials/icon-button/icon-button";
import { useTheme } from "../../hooks";
import { styles } from "./back-button-style";

type BackButtonProps = {
  style?: Record<string, string | number>;
};

export const BackButton = (props: BackButtonProps) => {
  const { style: extStyle = {} } = props;
  const { goBack } = useNavigation();
  const style = useTheme(styles);

  return (
    <IconButton
      name="arrow-back-ios"
      onPress={goBack}
      style={{ ...style.button, ...extStyle }}
      iconStyle={style.icon}
    />
  );
};
