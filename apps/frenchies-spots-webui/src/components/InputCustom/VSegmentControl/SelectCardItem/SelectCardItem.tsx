import React from "react";

import { useStyles } from "./SelectCardItemStyle";
import { Box, Font, Stack, Text, Title } from "@frenchies-spots/material";

export type TCardItem = {
  name: string;
  description: string;
  value: string | number | boolean;
};

export interface SelectCardItemProps extends Omit<TCardItem, "value"> {
  index: number;
  selectedIndex: number;
  onChange: (index: number) => void;
}

export const SelectCardItem = (props: SelectCardItemProps) => {
  const { name, description, index, selectedIndex, onChange } = props;

  const { classes } = useStyles(selectedIndex === index);

  const handleClick = () => {
    onChange(index);
  };

  return (
    <Box className={classes.container} onClick={handleClick}>
      <Stack ta="center" spacing={4}>
        <Font variant="h3">{name}</Font>
        <Font variant="h4">{description}</Font>
      </Stack>
    </Box>
  );
};
