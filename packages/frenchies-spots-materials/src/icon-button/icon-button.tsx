import React from "react";
import { Button, ButtonProps, Typography, Container } from "..";
import { styles } from "./icon-button-styles";
import { Icon, IconProps } from "../icon";

export interface IconButtonProps
  extends ButtonProps,
    Omit<IconProps, "color" | "style"> {
  iconColor?: string;
  iconStyle?: Record<string, string | number>;
  label?: string | null;
  style?: Record<string, string | number>;
}

export const IconButton = (props: IconButtonProps) => {
  const {
    name = "landscape",
    size = 24,
    iconColor = "white",
    style = {},
    iconStyle = {},
    label = null,
    ...other
  } = props;

  return (
    <Button
      isIconButton={true}
      style={{ ...styles.button, ...style }}
      {...other}
    >
      <Container direction="row">
        <Icon
          name={name}
          size={size}
          color={iconColor}
          style={{ ...iconStyle, marginRight: 4 }}
        />
        {label && (
          <Typography style={{ ...styles.label }} color="white">
            {label}
          </Typography>
        )}
      </Container>
    </Button>
  );
};
