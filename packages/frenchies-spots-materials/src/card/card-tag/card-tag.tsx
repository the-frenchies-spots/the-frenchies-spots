import React from "react";
import { Box } from "../../box";
import { Icon, IconProps } from "../../icon";
import { styles } from "./card-tag-styles";

interface CardTagProps {
  icon: IconProps["name"];
}

export const CardTag = (props: CardTagProps) => {
  const { icon } = props;

  return (
    <Box style={styles.tag}>
      <Icon name={icon} size={15} color="white" />
    </Box>
  );
};
