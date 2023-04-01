import React, { ReactNode } from "react";
import { ButtonBase, type ButtonBaseProps } from "../button-base";
import { styles } from "./secondary-button-styles";
import { upperCase } from "lodash";

interface SecondaryButtonProps extends Omit<ButtonBaseProps, "children"> {
  children: ReactNode;
  isSelected?: boolean;
  isDisabled?: boolean;
  little?: boolean;
  onPress?: () => void;
}
export const SecondaryButton = (props: SecondaryButtonProps) => {
  const {
    isSelected = false,
    isDisabled = false,
    children,
    little = false,
    onPress,
    ...other
  } = props;
  const style = styles(isSelected, isDisabled);
  return (
    <ButtonBase
      {...other}
      textColor={style.text.color}
      buttonColor={style.button.color}
      labelStyle={style.label}
      style={style.global}
      onPress={isDisabled ? undefined : onPress}
    >
      {typeof children === "string" && !little ? upperCase(children) : children}
    </ButtonBase>
  );
};
