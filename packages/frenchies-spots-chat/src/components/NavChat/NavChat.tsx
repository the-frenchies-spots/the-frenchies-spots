import React from "react";

import { IconChevronLeft, IconInfoCircleFilled } from "@frenchies-spots/icon";
import {
  ActionIcon,
  Flex,
  Group,
  Stack,
  Text,
} from "@frenchies-spots/material";
import { useStyles } from "./NavChat.styles";
import { ProfileChatEntity } from "@frenchies-spots/gql";

interface NavChatProps {
  onCancel?: () => void;
  participants: ProfileChatEntity[];
}

const NavChat = (props: NavChatProps) => {
  const { onCancel, participants } = props;

  const { classes } = useStyles();

  return (
    <Flex
      direction="row"
      className={classes.container}
      h={80}
      align="center"
      gap="md"
    >
      <ActionIcon
        h={40}
        w={40}
        variant="filled"
        sx={{ backgroundColor: "#B299BC", borderRadius: 8 }}
        onClick={onCancel}
      >
        <IconChevronLeft size={24} />
      </ActionIcon>
      <Group sx={{ flexGrow: 1 }} position="apart">
        <Stack spacing={2}>
          <Text>
            {participants
              .map((participant) => participant.profile.pseudo)
              .join(" ")}
          </Text>
          <Text>En ligne il y a 20 min</Text>
        </Stack>
        <ActionIcon>
          <IconInfoCircleFilled />
        </ActionIcon>
      </Group>
    </Flex>
  );
};

export default NavChat;
