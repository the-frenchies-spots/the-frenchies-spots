import React from "react";
import { Picker, PickerItemProps } from "@react-native-picker/picker";
import { useTheme } from "../../hooks";
import { styles } from "./select-style";

interface SelectItemProps extends PickerItemProps {}

export const SelectItem = (props: SelectItemProps) => {
  const { style: extStyle = {}, ...other } = props;
  const style = useTheme(styles);
  const Item = Picker.Item;
  return (
    <Item
      {...other}
      style={{
        ...style.item,
        ...(extStyle as Record<string, string | number>),
      }}
    />
  );
};
