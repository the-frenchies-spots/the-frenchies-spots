import React from "react";
import { Picker, PickerProps } from "@react-native-picker/picker";
import { styles } from "./select-base-style";

export interface SelectBaseProps extends PickerProps {}

export const SelectBase = (props: SelectBaseProps) => {
  const { style: extStyle = {}, ...other } = props;
  return (
    <Picker
      {...other}
      style={{
        ...styles.input,
        ...(extStyle as Record<string, string | number>),
      }}
    />
  );
};
