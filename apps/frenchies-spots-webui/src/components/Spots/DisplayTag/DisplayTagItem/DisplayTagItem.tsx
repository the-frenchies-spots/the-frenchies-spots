import React from "react";

import { useStyles } from "./DisplayTagItem.style";
import { capitalize } from "lodash";
import { Box, Image, Stack, Text } from "@frenchies-spots/material";

export type TTagItem = {
  id: string;
  name: string;
  tagPictureUrl: string;
  category: string;
};

export interface DisplayTagItemProps extends TTagItem {}

export const DisplayTagItem = (props: DisplayTagItemProps) => {
  const { name, tagPictureUrl } = props;

  const { classes } = useStyles();

  return (
    <Box className={classes.touchableContainer}>
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
