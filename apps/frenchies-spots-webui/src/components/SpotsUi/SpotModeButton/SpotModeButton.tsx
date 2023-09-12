import React from "react";

import { Button, Text, type ButtonProps, Box } from "@frenchies-spots/material";
import { useStyles } from "./SpotModeButton.styles";
import { IconList, IconMap2 } from "@frenchies-spots/icon";

interface SpotModeButtonProps extends ButtonProps {
  isMapMode: boolean;
  onClick?: () => void;
}

const SpotModeButton = (props: SpotModeButtonProps) => {
  const { isMapMode, className, onClick, ...buttonProps } = props;

  const { cx, classes } = useStyles();

  const Icon = isMapMode ? IconList : IconMap2;

  return (
    <Box className={className}>
      <Button {...buttonProps} className={cx(classes.button)} onClick={onClick}>
        <Icon size={16} style={{ marginRight: 8 }} />
        <Text size={16}> {isMapMode ? "Liste" : "Carte"}</Text>
      </Button>
    </Box>
  );
};

export default SpotModeButton;
