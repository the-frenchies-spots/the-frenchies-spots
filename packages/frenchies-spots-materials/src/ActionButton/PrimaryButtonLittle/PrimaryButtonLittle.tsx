import React from "react";

import { Button, type ButtonProps } from "@mantine/core";
import { useStyles } from "./PrimaryButtonLittle.styles";
import { getColor } from "../../utils/get-color";
import { TButtonVariant, TColor } from "../../type";

interface ActionButtonProps extends Omit<ButtonProps, "h"> {
  color?: TColor & string;
  onClick?: () => void;
  h?: number | string;
}

export const PrimaryButtonLittle = (props: ActionButtonProps) => {
  const { color, variant = "default", h, className, ...buttonProps } = props;
  const { cx, classes } = useStyles({ color: getColor(color), h });
  return (
    <Button
      {...buttonProps}
      h={h}
      className={cx(classes[variant as TButtonVariant], className)}
    />
  );
};

PrimaryButtonLittle.displayName =
  "@frenchies-spots/material/PrimaryButtonLittle/PrimaryButtonLittle";
