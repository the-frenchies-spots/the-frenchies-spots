import React from "react";
import { Flex, type FlexProps } from "@frenchies-spots/material";

const Badge = ({ sx, ...props }: FlexProps) => {
  return (
    <Flex
      {...props}
      align="center"
      justify="center"
      sx={{
        ...sx,
        backgroundColor: "#8F8FD9",
        width: 20,
        height: 20,
        borderRadius: 20,
      }}
    />
  );
};

export default Badge;
