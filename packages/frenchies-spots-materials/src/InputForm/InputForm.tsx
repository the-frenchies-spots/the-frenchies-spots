import React from "react";

import { TextInput, type TextInputProps, type Sx } from "@mantine/core";
import { useStyles } from "./InputForm.styles";

interface InputFormProps extends TextInputProps {
  errorMessage?: string;
  isShadow?: boolean;
  sx?: Sx;
}

export const InputForm = (props: InputFormProps) => {
  const {
    error,
    isShadow = true,
    variant,
    errorMessage = "",
    sx,
    ...Inputprops
  } = props;

  const { classes } = useStyles({
    error: !!error,
    filled: variant === "filled",
    isShadow,
    sx,
  });

  return (
    <TextInput
      error={error && errorMessage}
      {...Inputprops}
      className={classes.input}
      errorProps={{
        sx: {
          color: "red",
        },
      }}
    />
  );
};

InputForm.displayName = "@frenchies-spots/material/InputForm/InputForm";
