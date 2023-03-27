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
  zIndex?: number;
  contentStyle?: Record<string, string | number>;
  disableContainer?: boolean;
}

export const CornerBar = (props: CornerBarProps) => {
  const {
    children,
    color,
    mode = "bottom",
    cornerWidth = 50,
    cornerHeight = 50,
    zIndex = 10,
    disableContainer = false,
    contentStyle = {},
  } = props;

  const style = styles(color, mode, zIndex);

  const cornerbarContent = (
    <Box style={{ ...style.cornerbarContent, ...contentStyle }}>{children}</Box>
  );

  return (
    <Box style={disableContainer ? undefined : style.container}>
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
