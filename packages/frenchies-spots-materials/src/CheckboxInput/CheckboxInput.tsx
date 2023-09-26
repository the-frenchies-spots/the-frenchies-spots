import React from "react";

import { fonts } from "../utils";

import { Checkbox, type CheckboxProps } from "@mantine/core";

export const CheckboxInput = (props: CheckboxProps) => {
  const { ...other } = props;

  return (
    <Checkbox
      {...other}
      sx={(theme) => ({
        ".mantine-Checkbox-label": {
          ...fonts["Montserrat-Regular"].style,
          fontSize: 16,
          fontStyle: "normal",
          fontWeight: 400,
          color: theme.colors.darkPurple[0],
        },
      })}
    />
  );
};

CheckboxInput.displayName =
  "@frenchies-spots/material/CheckboxInput/CheckboxInput";
