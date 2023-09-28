import React, { useState } from "react";

import { IconMessages } from "@frenchies-spots/icon";
import { ProfileEntity } from "@frenchies-spots/gql";
import {
  ActionIcon,
  PrimaryButton,
  type ButtonProps,
} from "@frenchies-spots/material";

import useContact from "../../../hooks/use-contact";
import { useStyles } from "./ContactButton.styles";

interface ContactButtonProps
  extends Omit<ButtonProps, "onClick" | "color" | "h"> {
  profile: ProfileEntity;
  isSmallMode?: boolean;
}

const ContactButton = (props: ContactButtonProps) => {
  const { isSmallMode = false, profile, ...other } = props;
  const [disabled, setDisabled] = useState(false);

  const { onContactClick } = useContact();

  const { classes } = useStyles();

  const handleContactClick: React.MouseEventHandler<HTMLButtonElement> = (
    e
  ) => {
    setDisabled(true);
    e.stopPropagation();
    onContactClick(profile);
  };

  if (isSmallMode)
    return (
      <ActionIcon
        onClick={handleContactClick}
        className={classes.icon}
        disabled={disabled}
      >
        <IconMessages color="white" />
      </ActionIcon>
    );
  return (
    <PrimaryButton
      disabled={disabled}
      leftIcon={<IconMessages />}
      onClick={() => onContactClick(profile)}
      {...other}
    >
      Contacter
    </PrimaryButton>
  );
};

export default ContactButton;
