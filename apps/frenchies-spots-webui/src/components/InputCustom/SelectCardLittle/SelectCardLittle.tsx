import React, { useState, useMemo } from "react";

import {
  SelectCardLittleItem,
  type TSelectCardLittle,
} from "./SelectCardLittleItem";
import { Box, Group, type GroupProps } from "@frenchies-spots/material";

export interface SelectCardLittleProps extends Omit<GroupProps, "onChange"> {
  value: TSelectCardLittle["value"];
  list: TSelectCardLittle[];
  onChange?: (value: TSelectCardLittle["value"]) => void;
}

export const SelectCardLittle = (props: SelectCardLittleProps) => {
  const { value, list, onChange, ...groupProps } = props;

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
    <Group spacing={20} {...groupProps}>
      {list.map((selectCardItem, index) => {
        const { name } = selectCardItem;
        return (
          <Box key={index}>
            <SelectCardLittleItem
              name={name}
              index={index}
              selectedIndex={currentIndex}
              onChange={handleChange}
            />
          </Box>
        );
      })}
    </Group>
  );
};
