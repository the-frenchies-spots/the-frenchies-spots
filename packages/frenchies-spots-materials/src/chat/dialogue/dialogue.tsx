import React from "react";
import { Box, type BoxProps } from "../../box";
import { styles } from "./dialogue-style";
import { Bubble } from "../bubble";
import { Avatar } from "../avatar";
import { HStack, VStack } from "../../stack";

interface DialogueProps extends BoxProps {
  messages: string[];
}

export const Dialogue = (props: DialogueProps) => {
  const { style, messages } = props;
  return (
    <Box style={{ ...styles.container, ...(style as Object) }}>
      <HStack justify="between">
        <Box>
          <Avatar />
        </Box>
        <VStack spacing={10} style={styles.bubbleContainer}>
          {messages.map((message, index) => (
            <Box key={index}>
              <Bubble value={message} />
            </Box>
          ))}
        </VStack>
      </HStack>
    </Box>
  );
};
