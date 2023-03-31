import React from "react";
import { Box } from "../../../box";
import { Text, Title } from "../../../typography";
import { TouchableOpacity } from "react-native";
import { HStack } from "../../../stack";
import { styles } from "./select-card-item-style";

export type TCardItem = { name: string; description: string; value: string };

export interface SelectCardItemProps extends Omit<TCardItem, "value"> {
  index: number;
  selectedIndex: number;
  onChange: (index: number) => void;
}

export const SelectCardItem = (props: SelectCardItemProps) => {
  const { name, description, index, selectedIndex, onChange } = props;

  const style = styles(selectedIndex === index);

  const handleClick = () => {
    onChange(index);
  };

  return (
    <TouchableOpacity onPress={handleClick}>
      <Box style={style.container}>
        <Text style={style.label}>
          <Title variant="h3">{name}</Title>
          <Text> - </Text>
          <Title variant="h5">{description}</Title>
        </Text>
      </Box>
    </TouchableOpacity>
  );
};
