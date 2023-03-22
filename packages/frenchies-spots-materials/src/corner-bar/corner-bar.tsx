import React, { ReactNode } from "react";
import { HStack } from "../stack";
import { Box } from "../box";
import { CornerItem } from "./corner-item";
import { styles } from "./corner-bar-styles";

interface CornerBarProps {
  color?: string;
  children?: ReactNode;
  mode?: "top" | "bottom";
  cornerWidth?: number;
  cornerHeight?: number;
}

export const CornerBar = (props: CornerBarProps) => {
  const {
    children,
    color,
    mode = "bottom",
    cornerWidth = 50,
    cornerHeight = 50,
  } = props;

  const style = styles(color, mode);

  const cornerbarContent = <Box style={style.cornerbarContent}>{children}</Box>;

  return (
    <Box style={style.container}>
      <Box style={style.cornerbarContainer}>
        {mode === "top" && cornerbarContent}

        <HStack style={style.cornersContainer} justify="between">
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
        </HStack>

        {mode === "bottom" && cornerbarContent}
      </Box>
    </Box>
  );
};
