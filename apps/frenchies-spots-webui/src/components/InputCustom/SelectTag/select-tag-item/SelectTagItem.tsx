import React from "react";

import { useStyles } from "./SelectTagItem.style";
import { capitalize } from "lodash";
import { Box, Image, Stack, Text } from "@frenchies-spots/material";

export type TTagItem = {
  id: string;
  name: string;
  tagPictureUrl: string;
  category: string;
};

export interface SelectTagItemProps extends TTagItem {
  selectedTags: string[];
  onChange: (tagId: string) => void;
  disabled?: boolean;
}

export const SelectTagItem = (props: SelectTagItemProps) => {
  const {
    id,
    name,
    tagPictureUrl,
    category,
    selectedTags,
    onChange,
    disabled = false,
  } = props;

  const { classes } = useStyles(selectedTags.indexOf(id) !== -1);

  const handleClick = () => {
    onChange(id);
  };

  return (
    <Box
      onClick={disabled ? undefined : handleClick}
      className={classes.touchableContainer}
    >
      <Stack spacing={5}>
        <Box className={classes.container}>
          <Image
            src={tagPictureUrl}
            className={classes.picture}
            width={40}
            height={40}
            alt="alt"
          />
        </Box>
        <Text className={classes.tagLabel} ta="center">
          {capitalize(name)}
        </Text>
      </Stack>
    </Box>
  );
};
