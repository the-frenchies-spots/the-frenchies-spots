import React from "react";

import { Button, type ButtonProps } from "@mantine/core";
import { useStyles } from "./PrimaryButton.styles";
import { getColor } from "../../utils/get-color";
import { TButtonVariant, TColor } from "../../type";

interface ActionButtonProps extends Omit<ButtonProps, "h"> {
  color?: TColor & string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  h?: number | string;
}

export const PrimaryButton = (props: ActionButtonProps) => {
  const { color, h, variant = "default", className, ...buttonProps } = props;
  const { cx, classes } = useStyles({ color: getColor(color), h });
  return (
    <Button
      {...buttonProps}
      h={h}
      className={cx(classes[variant as TButtonVariant], className)}
    />
  );
};

PrimaryButton.displayName =
  "@frenchies-spots/material/PrimaryButton/PrimaryButton";
