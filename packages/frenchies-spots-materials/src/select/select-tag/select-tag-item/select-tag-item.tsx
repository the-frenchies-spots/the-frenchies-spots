import React from "react";
import { Box } from "../../../box";
import { Text, Title } from "../../../typography";
import { TouchableOpacity } from "react-native";
import { HStack, VStack } from "../../../stack";
import { styles } from "./select-tag-item-style";
import { Image } from "../../../image";
import { capitalize } from "lodash";

export type TTagItem = {
  id: string;
  name: string;
  tagPictureUrl: string;
  category: string;
};

export interface SelectTagItemProps extends TTagItem {
  selectedTags: string[];
  onChange: (tagId: string) => void;
}

export const SelectTagItem = (props: SelectTagItemProps) => {
  const { id, name, tagPictureUrl, category, selectedTags, onChange } = props;

  const style = styles(selectedTags.indexOf(id) !== -1);

  const handleClick = () => {
    onChange(id);
  };

  return (
    <TouchableOpacity onPress={handleClick} style={style.touchableContainer}>
      <VStack justify="center" items="center" spacing={5}>
        <Box style={style.container}>
          <Image src={tagPictureUrl} style={style.picture} />
        </Box>
        <Text style={style.tagLabel}>{capitalize(name)}</Text>
      </VStack>
    </TouchableOpacity>
  );
};
