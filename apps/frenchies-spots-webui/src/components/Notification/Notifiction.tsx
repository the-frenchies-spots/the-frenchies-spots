import React from "react";

import { IconBellFilled } from "@frenchies-spots/icon";
import { ActionIcon, Popover, Text } from "@frenchies-spots/material";
import { useStyles } from "./Notifiction.styles";
import { useMediaQuery } from "@frenchies-spots/hooks";

interface NotifictionProps {
  isMapMode: boolean;
}

const Notifiction = (props: NotifictionProps) => {
  const { isMapMode } = props;

  const { classes } = useStyles(isMapMode);

  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <Popover
      width={isSmallScreen ? "80%" : 350}
      position="bottom-end"
      withArrow
      shadow="md"
    >
      <Popover.Target>
        <ActionIcon className={classes.actionIcon}>
          <IconBellFilled />
        </ActionIcon>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="sm">
          This is uncontrolled popover, it is opened when button is clicked
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
};

export default Notifiction;
