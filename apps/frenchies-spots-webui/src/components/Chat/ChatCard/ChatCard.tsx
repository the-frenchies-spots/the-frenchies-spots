import React from "react";

import {
  Card,
  Group,
  type CardProps,
  Stack,
  Avatar,
  Text,
} from "@frenchies-spots/material";
import { ChatEntity } from "@frenchies-spots/gql";
import { useStyles } from "./ChatCard.styles";
import { getOtherParticipant } from "./../../../utils/get-other-participant";

export interface ChatCardProps extends Omit<CardProps, "children"> {
  chat: ChatEntity;
  profileId: string;
  onClick?: (id: string) => void;
}

const ChatCard = (props: ChatCardProps) => {
  const { chat, profileId, onClick, ...cardProps } = props;
  const { id, participants } = chat;

  const { classes } = useStyles();

  const handleClick = () => {
    if (typeof onClick === "function") {
      onClick(id);
    }
  };

  const participantsFilter = getOtherParticipant(participants, profileId);

  return (
    <Card
      className={classes.container}
      shadow="sm"
      padding="lg"
      radius="md"
      onClick={handleClick}
      withBorder
      {...cardProps}
    >
      <Group position="apart">
        <Stack>
          {participantsFilter.map((participant) => {
            const photoUrl = participant.profile.photoUrl;
            const avatarUrl = participant.profile.avatarUrl;
            return <Avatar key={participant.id} src={photoUrl || avatarUrl} />;
          })}
        </Stack>
        <Stack>
          {participantsFilter.map((participant) => {
            const pseudo = participant.profile.pseudo;
            return <Text key={participant.profile.id}>{pseudo}</Text>;
          })}
        </Stack>
      </Group>
    </Card>
  );
};

export default ChatCard;
