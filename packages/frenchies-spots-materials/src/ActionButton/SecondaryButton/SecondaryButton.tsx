import React from "react";

import { Button, type ButtonProps } from "@mantine/core";
import { useStyles } from "./SecondaryButton.styles";
import { getColor } from "../../utils/get-color";
import { TButtonVariant, TColor } from "../../type";

interface ActionButtonProps extends Omit<ButtonProps, "h"> {
  color?: TColor & string;
  selected?: boolean;
  onClick?: () => void;
  h?: number | string;
}

export const SecondaryButton = (props: ActionButtonProps) => {
  const {
    color,
    variant = "default",
    selected = false,
    className,
    h,
    ...buttonProps
  } = props;
  const { cx, classes } = useStyles({ color: getColor(color), selected, h });
  return (
    <Button
      {...buttonProps}
      h={h}
      className={cx(classes[variant as TButtonVariant], className)}
    />
  );
};

SecondaryButton.displayName =
  "@frenchies-spots/material/SecondaryButton/SecondaryButton";
