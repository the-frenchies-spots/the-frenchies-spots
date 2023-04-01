import React, { useState, useMemo } from "react";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import { Box } from "../../box";
import { VStack } from "../../stack";
import { SelectCardItem, type TCardItem } from "./select-card-item";

type SxProps = ViewStyle | TextStyle | ImageStyle;

interface SelectCardProps {
  value: TCardItem["value"];
  list: TCardItem[];
  onChange?: (value: TCardItem["value"]) => void;
  style?: SxProps;
}

export const SelectCard = (props: SelectCardProps) => {
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
    <VStack spacing={20} style={style}>
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
    </VStack>
  );
};
