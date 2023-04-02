import React, { useCallback, useState, useEffect } from "react";
import {
  TextInput as TextInputNative,
  type TextInputProps as TextInputPropsNative,
  type NativeSyntheticEvent,
  type TextInputFocusEventData,
} from "react-native";
import { styles } from "./text-input-styles";
import { VStack } from "../../stack";
import { BodyText } from "../../typography";
import { Box } from "../../box";

export type IVariant = "default" | "normal" | "outlined" | "focus" | "error";
export interface TextInputProps extends TextInputPropsNative {
  variant?: IVariant;
  label?: string | null;
  contentStyle?: Record<string, string | number>;
  isError?: boolean;
}

export const TextInput = (props: TextInputProps) => {
  const {
    style = {},
    contentStyle = {},
    label = null,
    variant = "normal",
    onBlur,
    isError = false,
    ...other
  } = props;

  const [varaiantBase] = useState<IVariant>(variant);
  const [currentVariant, setCurrentVariant] = useState<IVariant>(variant);

  const inputStyle = styles(currentVariant, varaiantBase);

  const handleFocus = useCallback(() => {
    setCurrentVariant("focus");
  }, []);

  const handleBlur = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setCurrentVariant(varaiantBase);
      if (typeof onBlur === "function") {
        onBlur(e);
      }
      if (isError) setCurrentVariant("error");
    },
    [isError]
  );

  useEffect(() => {
    if (isError) setCurrentVariant("error");
    else setCurrentVariant(varaiantBase);
  }, [isError]);

  return (
    <VStack spacing={10} style={style}>
      {label && (
        <Box>
          <BodyText>{label}</BodyText>
        </Box>
      )}
      <TextInputNative
        {...other}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{
          ...inputStyle.input,
          ...contentStyle,
        }}
      />
    </VStack>
  );
};
