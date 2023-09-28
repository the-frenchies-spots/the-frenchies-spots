import React from "react";

import { ContactEntity, ProfileEntity } from "@frenchies-spots/gql";
import {
  Card,
  type CardProps,
  Group,
  Text,
  Font,
  Avatar,
} from "@frenchies-spots/material";

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
        <Group>
          <Avatar
            src={contact?.contact?.photoUrl || contact?.contact?.avatarUrl}
            sx={{
              border: !contact?.contact?.photoUrl
                ? "1px solid #3F3979"
                : undefined,
              width: 50,
              height: 50,
              borderRadius: 50,
            }}
          />
          <Font variant="h3">{contact?.contact?.pseudo}</Font>
        </Group>
        <Group>
          <FriendRequestButton profile={contact?.contact} />
          {/* {contact && (
            <BlockButton
              profile={contact.contact}
              isAuthorize={contact.authorization}
            />
          )} */}
        </Group>
      </Group>
    </Card>
  );
};

export default MeetingCard;
