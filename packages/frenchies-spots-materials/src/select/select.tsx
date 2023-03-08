import React from 'react';
import { Picker, PickerProps } from '@react-native-picker/picker';
import { useTheme } from '@frenchies-spots/theme';
import { styles } from './select-style';

interface SelectProps extends PickerProps {}

export const Select = (props: SelectProps) => {
  const { style: extStyle = {}, ...other } = props;
  const style = useTheme(styles);
  return (
    <Picker
      {...other}
      style={{
        ...style.input,
        ...(extStyle as Record<string, string | number>)
      }}
    />
  );
};
