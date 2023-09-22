import React from "react";

import { ContactEntity, ProfileEntity } from "@frenchies-spots/gql";
import { Card, type CardProps, Group, Text } from "@frenchies-spots/material";

import BlockButton from "../../Profile/BlockButton/BlockButton";
import FriendRequestButton from "../../Profile/FriendRequestButton/FriendRequestButton";

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
          <FriendRequestButton profile={contact?.contact} />
          <BlockButton />
        </Group>
      </Group>
    </Card>
  );
};

export default MeetingCard;
