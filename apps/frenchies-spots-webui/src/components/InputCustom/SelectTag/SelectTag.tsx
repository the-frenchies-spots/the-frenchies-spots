import React, { useCallback, useEffect, useState } from "react";

import { Group, Box, type GroupProps } from "@frenchies-spots/material";

import { useStyles } from "./SelectTag.styles";
import { SelectTagItem, type TTagItem } from "./select-tag-item";

export interface SelectTagProps extends Omit<GroupProps, "onChange"> {
  list?: TTagItem[];
  value: string[];
  onChange?: (value: string[]) => void;
  style?: React.CSSProperties;
  disabled?: boolean;
}

export const SelectTag = (props: SelectTagProps) => {
  const {
    style = {},
    list = [],
    value = [],
    onChange,
    disabled = false,
    ...groupProps
  } = props;

  const { classes } = useStyles();

  const [tags, setTags] = useState<string[]>(value);

  useEffect(() => {
    if (!disabled) setTags(value);
  }, [value, disabled]);

  const handleChange = useCallback(
    (tagId: string) => {
      if (!disabled) {
        const tagList = [...tags];
        const currTagIdx = tagList.indexOf(tagId);
        if (currTagIdx !== -1) {
          tagList.splice(currTagIdx, 1);
        } else {
          tagList.push(tagId);
        }
        if (typeof onChange === "function") {
          onChange(tagList);
        }
        setTags(tagList);
      }
    },
    [tags, disabled, onChange]
  );

  return (
    <Group position="center" {...groupProps}>
      {list.map((selectTagItem, index) => {
        const { id, name, tagPictureUrl, category } = selectTagItem;
        return (
          <Box key={index} className={classes.container}>
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
    </Group>
  );
};
