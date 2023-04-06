import React from "react";
import { Box } from "../../box";
import { BodyText } from "../../typography";
import { styles } from "./bubble-style";

interface BubbleProps {
  value: string;
}

export const Bubble = (props: BubbleProps) => {
  const { value } = props;
  return (
    <Box style={styles.container}>
      <BodyText>{value}</BodyText>
    </Box>
  );
};
