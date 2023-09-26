import React from "react";

import { useStyles } from "./SelectCardLittleItem.styles";
import { Box, Font, Text } from "@frenchies-spots/material";

export type TSelectCardLittle = {
  name: string;
  value: string | number | boolean | undefined;
};

export interface SelectCardLittleItemProps
  extends Omit<TSelectCardLittle, "value"> {
  index: number;
  selectedIndex: number;
  onChange: (index: number) => void;
}

export const SelectCardLittleItem = (props: SelectCardLittleItemProps) => {
  const { name, index, selectedIndex, onChange } = props;

  const { classes } = useStyles(selectedIndex === index);

  const handleClick = () => {
    onChange(index);
  };

  return (
    <Box className={classes.container} onClick={handleClick}>
      <Box className={classes.label}>
        <Font>{name}</Font>
      </Box>
    </Box>
  );
};
