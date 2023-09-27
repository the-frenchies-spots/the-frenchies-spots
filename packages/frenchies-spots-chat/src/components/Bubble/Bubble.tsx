import React from "react";

import { Box, Text, type BoxProps, Font } from "@frenchies-spots/material";
import { useStyles } from "./Bubble.styles";

interface BubbleProps extends BoxProps {
  isParticipant: boolean;
  message: string;
}

const Bubble = (props: BubbleProps) => {
  const { message, isParticipant, className, ...other } = props;

  const { cx, classes } = useStyles({
    position: isParticipant ? "left" : "right",
  });

  return (
    <Box
      className={cx(classes.bubble, className)}
      p="md"
      my="md"
      sx={{
        background: isParticipant ? "white" : "#B68973",
        color: isParticipant ? "purple" : "white",
      }}
      {...other}
    >
      <Font>{message}</Font>
    </Box>
  );
};

export default Bubble;
