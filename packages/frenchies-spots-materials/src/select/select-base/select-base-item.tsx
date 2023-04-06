import React from "react";
import { Picker, PickerItemProps } from "@react-native-picker/picker";
import { styles } from "./select-base-style";

export interface SelectBaseItemProps extends PickerItemProps {}

export const SelectBaseItem = (props: SelectBaseItemProps) => {
  const { style: extStyle = {}, ...other } = props;
  const Item = Picker.Item;
  return (
    <Item
      {...other}
      style={{
        ...styles.item,
        ...(extStyle as Record<string, string | number>),
      }}
    />
  );
};
