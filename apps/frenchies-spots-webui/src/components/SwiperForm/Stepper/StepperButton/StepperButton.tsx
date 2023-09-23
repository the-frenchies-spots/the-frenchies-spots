import React from "react";

import { useStyles } from "./StepperButton.styles";
import { Box, type BoxProps } from "@frenchies-spots/material";

interface StepperButtonProps extends BoxProps {
  isSelected: boolean;
  onClick: () => void;
}

const StepperButton = (props: StepperButtonProps) => {
  const { isSelected, className, ...other } = props;

  const { cx, classes } = useStyles(isSelected);

  return (
    <Box {...other} className={cx(classes.touchable, className)}>
      <Box className={classes.paginationButton} />
    </Box>
  );
};

export default StepperButton;
