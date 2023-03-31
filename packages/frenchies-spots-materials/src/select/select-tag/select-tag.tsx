import React, { useState } from "react";
import { Box } from "../../box";
import { Wrap } from "../../wrap";
import { SelectTagItem, type TTagItem } from "./select-tag-item";
import { styles } from "./select-tag-styles";

interface SelectTagProps {
  list: TTagItem[];
  value: string[];
  onChange?: (value: string[]) => void;
}

export const SelectTag = (props: SelectTagProps) => {
  const { list, value = [], onChange } = props;
  const [tags, setTags] = useState<string[]>(value);

  const handleChange = (tagId: string) => {
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

  return (
    <Wrap m={4} style={{}} justify="between" spacing={20}>
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
              onChange={handleChange}
            />
          </Box>
        );
      })}
    </Wrap>
  );
};
