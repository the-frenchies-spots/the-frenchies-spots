import React, { useState } from "react";
import { Box } from "../../box";
import { VStack } from "../../stack";
import { SelectCardItem, type TCardItem } from "./select-card-item";

interface SelectCardProps {
  list: TCardItem[];
  onChange?: (value: TCardItem["value"]) => void;
}

export const SelectCard = (props: SelectCardProps) => {
  const { list, onChange } = props;
  const [currentIndex, setIndex] = useState<number>(0);

  const handleChange = (index: number) => {
    if (typeof onChange === "function") {
      onChange(list[index].value);
    }
    setIndex(index);
  };

  return (
    <VStack spacing={20}>
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
