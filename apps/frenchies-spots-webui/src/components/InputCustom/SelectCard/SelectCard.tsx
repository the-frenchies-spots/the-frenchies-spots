import React, { useState, useMemo } from "react";

import { SelectCardItem, type TCardItem } from "./SelectCardItem";
import { Stack, Box, StackProps } from "@frenchies-spots/material";

export interface SelectCardProps extends Omit<StackProps, "onChange"> {
  value: TCardItem["value"];
  list: TCardItem[];
  onChange?: (value: TCardItem["value"]) => void;
}

export const SelectCard = (props: SelectCardProps) => {
  const { value, list, onChange, ...stackProps } = props;

  const initItem = useMemo(() => list.find((item) => item.value === value), []);
  const [currentIndex, setIndex] = useState<number>(
    initItem ? list.indexOf(initItem) : 0
  );

  const handleChange = (index: number) => {
    if (typeof onChange === "function") {
      onChange(list[index].value);
    }
    setIndex(index);
  };

  return (
    <Stack spacing={20} {...stackProps}>
      {list.map((selectCardItem, index) => {
        const { name, description } = selectCardItem;
        return (
          <Box key={index}>
            <SelectCardItem
              name={name}
              description={description}
              index={index}
              selectedIndex={currentIndex}
              onChange={handleChange}
            />
          </Box>
        );
      })}
    </Stack>
  );
};
