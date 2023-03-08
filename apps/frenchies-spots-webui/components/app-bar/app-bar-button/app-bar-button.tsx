import React from "react";
import {
  IconButton,
  IconButtonProps,
} from "../../../materials/icon-button/icon-button";
import { useTheme } from "../../../hooks";
import { styles } from "./app-bar-button-styles";
import { useNavigation } from "../../../hooks";

interface AppBarButtonProps extends IconButtonProps {
  isSelected?: boolean;
}

const AppBarButton = (props: AppBarButtonProps) => {
  const { isSelected = false, ...other } = props;
  const style = useTheme(styles, isSelected);
  return <IconButton {...other} style={style.button} size={28} color="info" />;
};

export default AppBarButton;
