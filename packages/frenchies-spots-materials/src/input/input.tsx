import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { styles } from './input-styles';
import { useTheme } from '@frenchies-spots/theme';

export type InputProps = TextInputProps;

const Input = (props: InputProps) => {
  const { style = {}, ...other } = props;
  const inputStyle = useTheme(styles);
  return (
    <TextInput
      {...other}
      style={{ ...inputStyle.input, ...(style as Record<string, string>) }}
    />
  );
};

export default Input;
