import React from "react";

import { Button, Text, type ButtonProps, Box } from "@frenchies-spots/material";
import { useStyles } from "./SpotModeButton.styles";
import { IconList, IconMap2 } from "@frenchies-spots/icon";
import { useSpotUi } from "../../../hooks/use-spot-ui";

interface SpotModeButtonProps extends ButtonProps {
  onClick?: () => void;
}

const SpotModeButton = (props: SpotModeButtonProps) => {
  const { className, onClick, ...buttonProps } = props;

  const { isMapMode, setIsMapMode } = useSpotUi();

  const { cx, classes } = useStyles();

  const handleClick = () => {
    if (typeof onClick === "function") {
      onClick();
    }
    setIsMapMode((prev) => !prev);
  };

  const Icon = isMapMode ? IconList : IconMap2;

  return (
    <Box className={className}>
      <Button
        {...buttonProps}
        className={cx(classes.button)}
        onClick={handleClick}
      >
        <Icon size={16} style={{ marginRight: 8 }} />
        <Text size={16}> {isMapMode ? "Liste" : "Carte"}</Text>
      </Button>
    </Box>
  );
};

export default SpotModeButton;
