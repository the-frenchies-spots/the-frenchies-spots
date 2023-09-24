import React, { ReactNode } from "react";
import { useStyles } from "./CornerBar.styles";
import { Box, type BoxProps, Group } from "@frenchies-spots/material";
import { CornerItem } from "./CornerBarItem";

interface CornerBarProps extends BoxProps {
  color?: string;
  children?: ReactNode;
  mode?: "top" | "bottom";
  cornerWidth?: number;
  cornerHeight?: number;
  zIndex?: number;
  disableContainer?: boolean;
}

const CornerBar = (props: CornerBarProps) => {
  const {
    disableContainer,
    color = "#3F3979",
    cornerWidth,
    cornerHeight,
    mode = "bottom",
    zIndex = 10000,
    className,
    children,
    ...other
  } = props;

  const { cx, classes } = useStyles({ color, mode, zIndex });

  const cornerbarContent = (
    <Box className={cx(classes.children, className)}>{children}</Box>
  );

  return (
    <Box className={cx(classes.container)}>
      {mode === "top" && cornerbarContent}

      <Group className={classes.cornersBar} position="apart">
        <CornerItem
          mode={`${mode}Left`}
          color={color}
          width={cornerWidth}
          height={cornerHeight}
        />
        <CornerItem
          mode={`${mode}Right`}
          color={color}
          width={cornerWidth}
          height={cornerHeight}
        />
      </Group>

      {mode === "bottom" && cornerbarContent}
    </Box>
  );
};

export default CornerBar;
