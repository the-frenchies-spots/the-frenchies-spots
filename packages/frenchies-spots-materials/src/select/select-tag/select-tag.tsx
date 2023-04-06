import React, { useEffect, useState } from "react";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import { Box } from "../../box";
import { Wrap } from "../../wrap";
import { SelectTagItem, type TTagItem } from "./select-tag-item";
import { styles } from "./select-tag-styles";
type SxProps = ViewStyle | TextStyle | ImageStyle;

export interface SelectTagProps {
  list?: TTagItem[];
  value: string[];
  onChange?: (value: string[]) => void;
  style?: SxProps;
  disabled?: boolean;
}

export const SelectTag = (props: SelectTagProps) => {
  const {
    style = {},
    list = [],
    value = [],
    onChange,
    disabled = false,
  } = props;
  const [tags, setTags] = useState<string[]>(value);

  const handleChange = (tagId: string) => {
    if (!disabled)
      setTags((current) => {
        let tagList = [...current];
        const currTagIdx = tagList.indexOf(tagId);
        if (currTagIdx != -1) {
          tagList.splice(currTagIdx, 1);
        } else {
          tagList.push(tagId);
        }
        if (typeof onChange === "function") {
          onChange([...tagList]);
        }
        return [...tagList];
      });
  };

  useEffect(() => {
    if (!disabled) setTags(value);
  }, [value]);

  return (
    <Wrap m={4} style={style} justify="start" spacing={20}>
      {list.map((selectTagItem, index) => {
        const { id, name, tagPictureUrl, category } = selectTagItem;
        return (
          <Box key={index} style={styles.container}>
            <SelectTagItem
              id={id}
              name={name}
              tagPictureUrl={tagPictureUrl}
              category={category}
              selectedTags={tags}
              disabled={disabled}
              onChange={handleChange}
            />
          </Box>
        );
      })}
    </Wrap>
  );
};
