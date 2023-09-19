import React, { ReactNode } from "react";
import { Box, Flex } from "@mantine/core";
import { useStyles } from "./BadgeIcon.styles";

export interface BadgeIconProps {
  content: number;
  color?: string;
  children: ReactNode;
}

export const BadgeIcon = (props: BadgeIconProps) => {
  const { content, color = "green", children } = props;

  const { classes } = useStyles(color);

  if (content <= 0) return <>{children}</>;
  return (
    <Box className={classes.container}>
      <Flex className={classes.badge} justify="center" align="center">
        {content}
      </Flex>
      {children}
    </Box>
  );
};
