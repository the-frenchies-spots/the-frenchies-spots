import { ProfileEntity } from "@frenchies-spots/gql";
import {
  IconUserPlus,
  IconUserQuestion,
  IconUsers,
} from "@frenchies-spots/icon";
import { ActionIcon, Flex } from "@frenchies-spots/material";
import React from "react";
import useContact from "../../../hooks/use-contact";
import { useStyles } from "./FriendRequestButton.styles";
import { useRouter } from "next/router";

interface FriendRequestButtonProps {
  profile: ProfileEntity;
}

const FriendRequestButton = (props: FriendRequestButtonProps) => {
  const { profile } = props;

  const router = useRouter();
  const { onFriendRequestClick } = useContact();

  const isSelected = (profile?.notifications?.length || 0) > 0;
  const isFriend = profile?.contacts[0]?.isFriend;

  const { classes } = useStyles();

  return (
    <>
      {isSelected ? (
        <Flex align="center" justify="center" className={classes.friendRequest}>
          <IconUserQuestion color="white" />
        </Flex>
      ) : isFriend ? (
        <ActionIcon
          className={classes.isFriend}
          onClick={() => router.push(`/profile/friends/${profile.id}`)}
        >
          <IconUsers color="#A480A6" />
        </ActionIcon>
      ) : (
        <ActionIcon
          onClick={() => onFriendRequestClick(profile)}
          className={classes.default}
        >
          <IconUserPlus color="orange" />
        </ActionIcon>
      )}
    </>
  );
};

export default FriendRequestButton;
