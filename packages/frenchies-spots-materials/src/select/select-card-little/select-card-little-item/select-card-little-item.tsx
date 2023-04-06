import React from "react";
import { Box } from "../../../box";
import { BodyText, Text, Title } from "../../../typography";
import { TouchableOpacity } from "react-native";
import { HStack } from "../../../stack";
import { styles } from "./select-card-little-item-style";

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

  const style = styles(selectedIndex === index);

  const handleClick = () => {
    onChange(index);
  };

  return (
    <TouchableOpacity onPress={handleClick}>
      <Box style={style.container}>
        <Box style={style.label}>
          <BodyText>{name}</BodyText>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};
