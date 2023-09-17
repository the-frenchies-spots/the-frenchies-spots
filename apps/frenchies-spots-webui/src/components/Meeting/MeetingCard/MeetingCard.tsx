import React from "react";

import { ContactEntity, ProfileEntity } from "@frenchies-spots/gql";
import {
  ActionIcon,
  Card,
  type CardProps,
  Group,
  Text,
} from "@frenchies-spots/material";
import { IconHandStop, IconUserPlus } from "@frenchies-spots/icon";

interface MeetingCardProps extends Omit<CardProps, "children"> {
  contact: ContactEntity;
  onAddFriendClick: (profile: ProfileEntity) => void;
}
const MeetingCard = (props: MeetingCardProps) => {
  const { contact, onAddFriendClick, ...cardProps } = props;

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder {...cardProps}>
      <Group position="apart">
        <Text>{contact?.contact?.pseudo}</Text>
        <Group>
          {!contact?.isFriend && (
            <ActionIcon onClick={() => onAddFriendClick(contact?.contact)}>
              <IconUserPlus />
            </ActionIcon>
          )}
          <ActionIcon>
            <IconHandStop />
          </ActionIcon>
        </Group>
      </Group>
    </Card>
  );
};

export default MeetingCard;
