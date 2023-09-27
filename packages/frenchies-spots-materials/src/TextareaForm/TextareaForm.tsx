import React from "react";

import { Textarea, type TextareaProps, type Sx } from "@mantine/core";
import { useStyles } from "./TextareaForm.styles";

interface TextareaFormProps extends TextareaProps {
  errorMessage?: string;
  isShadow?: boolean;
  sx?: Sx;
}

export const TextareaForm = (props: TextareaFormProps) => {
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
    <Textarea
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

TextareaForm.displayName =
  "@frenchies-spots/material/TextareaForm/TextareaForm";
