import { IconHandStop } from "@frenchies-spots/icon";
import { ActionIcon, PrimaryButton } from "@frenchies-spots/material";
import React from "react";
import { useStyles } from "./BlockButton.styles";

interface BlockButtonProps {
  isSmallMode?: boolean;
}

const BlockButton = (props: BlockButtonProps) => {
  const { isSmallMode = true } = props;

  const { classes } = useStyles();

  if (!isSmallMode)
    return (
      <PrimaryButton
        variant="outline"
        color="red"
        leftIcon={<IconHandStop className={classes.icon} />}
      >
        Blocker
      </PrimaryButton>
    );
  return (
    <ActionIcon className={classes.button}>
      <IconHandStop className={classes.icon} />
    </ActionIcon>
  );
};

export default BlockButton;
