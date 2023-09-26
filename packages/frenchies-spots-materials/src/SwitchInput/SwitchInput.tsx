import React from "react";

import { Switch, type SwitchProps } from "@mantine/core";
import { fonts } from "../utils";

export const SwitchInput = ({ ...props }: SwitchProps) => {
  return (
    <Switch
      {...props}
      sx={{
        "	.mantine-Switch-label": {
          ...fonts["Montserrat-Regular"].style,
          fontSize: 16,
          fontStyle: "normal",
          fontWeight: 400,
          color: "#3F3979",
        },
      }}
    />
  );
};

SwitchInput.displayName = "@frenchies-spots/material/SwitchInput/SwitchInput";
