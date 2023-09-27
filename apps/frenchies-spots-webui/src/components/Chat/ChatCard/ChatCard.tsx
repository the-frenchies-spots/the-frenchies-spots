import React from "react";

import {
  Card,
  Group,
  type CardProps,
  Stack,
  Avatar,
  Text,
  Log,
  BadgeIcon,
  Font,
} from "@frenchies-spots/material";
import { UserChatResponse } from "@frenchies-spots/gql";
import { useStyles } from "./ChatCard.styles";
import { getOtherParticipant } from "./../../../utils/get-other-participant";

export interface ChatCardProps extends Omit<CardProps, "children"> {
  chat: UserChatResponse;
  profileId: string;
  onClick?: (id: string) => void;
}

const ChatCard = (props: ChatCardProps) => {
  const { chat, profileId, onClick, ...cardProps } = props;

  const { classes } = useStyles();

  const handleClick = () => {
    if (typeof onClick === "function" && chat?.id) {
      onClick(chat?.id);
    }
  };

  const participantsFilter = getOtherParticipant(
    chat?.participants || [],
    profileId
  );

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
          {participantsFilter.map((participant, index) => {
            const photoUrl = participant?.profile?.photoUrl;
            const avatarUrl = participant?.profile?.avatarUrl;
            return (
              <BadgeIcon content={chat?._count?.chatMessages || 0} key={index}>
                <Avatar
                  src={photoUrl || avatarUrl}
                  sx={{
                    border: !photoUrl ? "1px solid #3F3979" : undefined,
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                  }}
                />
              </BadgeIcon>
            );
          })}
        </Stack>
        <Stack>
          {participantsFilter.map((participant, index) => {
            const pseudo = participant?.profile?.pseudo;
            return (
              <Font key={index} variant="h3">
                {pseudo}
              </Font>
            );
          })}
        </Stack>
      </Group>
    </Card>
  );
};

export default ChatCard;
