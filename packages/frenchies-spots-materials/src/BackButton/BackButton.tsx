import React from "react";
import { IconChevronLeft } from "@frenchies-spots/icon";
import { ActionIcon, ActionIconProps } from "@mantine/core";

export interface BackButtonProps extends ActionIconProps {
  onClick?: () => void;
}

export const BackButton = ({ onClick, ...other }: BackButtonProps) => {
  return (
    <ActionIcon
      h={40}
      w={40}
      variant="filled"
      sx={{ backgroundColor: "#B299BC", borderRadius: 8 }}
      onClick={onClick}
      {...other}
    >
      <IconChevronLeft size={24} />
    </ActionIcon>
  );
};
