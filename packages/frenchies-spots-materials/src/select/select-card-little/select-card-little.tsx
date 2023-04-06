import React, { useState, useMemo } from "react";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import { Box } from "../../box";
import { HStack } from "../../stack";
import {
  SelectCardLittleItem,
  type TSelectCardLittle,
} from "./select-card-little-item";

type SxProps = ViewStyle | TextStyle | ImageStyle;

export interface SelectCardLittleProps {
  value: TSelectCardLittle["value"];
  list: TSelectCardLittle[];
  onChange?: (value: TSelectCardLittle["value"]) => void;
  style?: SxProps;
}

export const SelectCardLittle = (props: SelectCardLittleProps) => {
  const { style = {}, value, list, onChange } = props;

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
    <HStack spacing={20} style={style}>
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
    </HStack>
  );
};
