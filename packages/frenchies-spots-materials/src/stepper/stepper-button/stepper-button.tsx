import React from "react";
import { TouchableOpacity, type TouchableOpacityProps } from "react-native";
import { styles } from "./stepper-button-styles";
import { Box } from "../../box";

export interface StepperButtonProps extends TouchableOpacityProps {
  isSelected: boolean;
}

export const StepperButton = (props: StepperButtonProps) => {
  const { isSelected, ...other } = props;
  const style = styles(isSelected);
  return (
    <TouchableOpacity {...other} style={style.touchable}>
      <Box style={style.paginationButton} />
    </TouchableOpacity>
  );
};
