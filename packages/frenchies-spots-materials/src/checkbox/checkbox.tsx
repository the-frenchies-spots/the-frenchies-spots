import React, { useState } from "react";
import { theme } from "@frenchies-spots/theme";
const { darkPurple } = theme.TFS.colors;
import {
  Checkbox as CheckboxMaterial,
  CheckboxProps as CheckboxPropsMaterial,
} from "react-native-paper";
import { HStack } from "../stack";
import { BodyText } from "../typography";
import { Box } from "../box";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";
type SxProps = ViewStyle | TextStyle | ImageStyle;

interface CheckboxProps extends Omit<CheckboxPropsMaterial, "status"> {
  value?: boolean;
  onChange?: (value: boolean) => void;
  status?: "checked" | "unchecked" | "indeterminate";
  label?: string;
  style?: SxProps;
}

export const Checkbox = (props: CheckboxProps) => {
  const { style = {}, value = false, onChange, label, ...other } = props;
  const [checked, setChecked] = useState<boolean>(value);

  const handleCheckedChange = () => {
    setChecked((current) => {
      if (typeof onChange === "function") {
        onChange(!current);
      }
      return !current;
    });
  };

  const checkbox = (
    <Box style={label ? {} : style}>
      <CheckboxMaterial
        status={checked ? "checked" : "unchecked"}
        onPress={handleCheckedChange}
        color={darkPurple}
        uncheckedColor={darkPurple}
        {...other}
      />
    </Box>
  );

  if (!label) return checkbox;
  return (
    <HStack spacing={label ? 10 : 0} items="center" style={style}>
      {checkbox}
      {label && <BodyText>{label}</BodyText>}
    </HStack>
  );
};
