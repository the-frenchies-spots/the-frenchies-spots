import React from "react";
import { KeyboardTypeOptions, Text } from "react-native";
import { Input } from "../input";
import { Typography } from "../typography";
import { Box } from "../box";
import { styles } from "./input-group-styles";
import { useTheme } from "../../hooks";
import { ImagePicker } from "../../components/image-picker";
import { Switch } from "../switch";
import { LocationPicker } from "../../components/location-picker/location-picker";
import { TCoordinate } from "../../types";
import { RadioButton } from "react-native-paper";

interface InputGroupProps {
  inputType?: "text" | "image" | "switch" | "location" | "radio";
  label?: string;
  placeholder?: string;
  value?:
    | string
    | boolean
    | null
    | undefined
    | { coordinate: TCoordinate; codeRegion: number }
    | number;
  isPassword?: boolean;
  type?: KeyboardTypeOptions;
  onChangeText?: (value: string) => void;
  onImageChange?: (base64: string) => void;
  onLocationChange?: (coordinate: TCoordinate, codeRegion: number) => void;
  onToggle?: (value: boolean) => void;
  onBlur?: () => void;
  onRadioChange?: (value: string) => void;
  error?: boolean;
  errorDetails?: string;
  style?: Record<string, string | number>;
  inputStyle?: Record<string, string | number>;
  isMultiline?: boolean;
  numberOfLines?: number;
  fullWidth?: boolean;
  radioValue?: string;
}

export const InputGroup = (props: InputGroupProps) => {
  const {
    inputType = "text",
    label,
    placeholder,
    value = null,
    isPassword,
    type = "default",
    onChangeText,
    onImageChange,
    onLocationChange,
    onRadioChange,
    onBlur,
    onToggle,
    error = false,
    errorDetails,
    style: extStyle = {},
    inputStyle = {},
    numberOfLines = 5,
    isMultiline = false,
    fullWidth = true,
    radioValue,
  } = props;

  const style = useTheme(styles, fullWidth);

  const input = () => {
    switch (inputType) {
      case "location":
        if (typeof onLocationChange === "function")
          return (
            <LocationPicker
              value={value as { coordinate: TCoordinate; codeRegion: number }}
              onLocationChange={onLocationChange}
            />
          );
        return null;
      case "image":
        return (
          <ImagePicker value={value as string} onImageChange={onImageChange} />
        );
      case "switch":
        return <Switch value={value as boolean} onValueChange={onToggle} />;
      case "radio":
        if (typeof onRadioChange === "function")
          return (
            <RadioButton
              value={value as string}
              status={value === radioValue ? "checked" : "unchecked"}
              onPress={() => onRadioChange(radioValue as string)}
            />
          );
        return null;
      default:
        return (
          <Input
            numberOfLines={numberOfLines}
            multiline={isMultiline}
            placeholder={placeholder}
            value={value as string}
            onChangeText={onChangeText}
            onBlur={onBlur}
            secureTextEntry={isPassword}
            keyboardType={type}
            style={{ ...style.input, ...inputStyle }}
          />
        );
    }
  };

  return (
    <Box style={{ ...style.container, ...extStyle }}>
      {!!label && <Typography style={style.label}>{label}</Typography>}
      {input()}
      {!!errorDetails && <Text style={style.error}>{errorDetails}</Text>}
    </Box>
  );
};
