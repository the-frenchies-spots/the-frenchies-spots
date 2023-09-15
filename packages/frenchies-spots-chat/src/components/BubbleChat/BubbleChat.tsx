import React from "react";

import { Box, type BoxProps, Text } from "@frenchies-spots/material";
import { StyleParams, useStyles } from "./BubbleChat.styles";

export interface BubbleChatProps
  extends Omit<BoxProps, "position">,
    StyleParams {
  message: string;
}

export const BubbleChat = (props: BubbleChatProps) => {
  const { message, position, className, ...other } = props;
  const { cx, classes } = useStyles({ position });
  console.log;
  return (
    <Box className={cx(classes.bubble, className)} p="md" my="md" {...other}>
      <Text>{message}</Text>
    </Box>
  );
};
