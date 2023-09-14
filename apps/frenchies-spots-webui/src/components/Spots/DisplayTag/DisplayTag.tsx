import React, { useCallback, useEffect, useState } from "react";

import { Group, Box, type GroupProps } from "@frenchies-spots/material";

import { useStyles } from "./DisplayTag.styles";
import { DisplayTagItem, type TTagItem } from "./DisplayTagItem";

export interface DisplayTagProps extends Omit<GroupProps, "onChange"> {
  list?: TTagItem[];
  value?: string[];
  style?: React.CSSProperties;
}

export const DisplayTag = (props: DisplayTagProps) => {
  const { style = {}, list = [], value = [], ...groupProps } = props;

  const { classes } = useStyles();

  return (
    <Group position="center" {...groupProps}>
      {list
        ?.filter(({ id: tagId }) => value.includes(tagId))
        ?.map((item, index) => {
          const { id, name, tagPictureUrl, category } = item;
          return (
            <Box key={index} className={classes.container}>
              <DisplayTagItem
                id={id}
                name={name}
                tagPictureUrl={tagPictureUrl}
                category={category}
              />
            </Box>
          );
        })}
    </Group>
  );
};
