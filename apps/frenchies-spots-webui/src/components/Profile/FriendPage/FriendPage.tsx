import { ProfileEntity } from "@frenchies-spots/gql";
import { Font, Log, PrimaryButton, Stack } from "@frenchies-spots/material";
import React from "react";
import ProfilePresentation from "./../ProfilePresentation/ProfilePresentation";
import ContactButton from "../ContactButton/ContactButton";
import BlockButton from "../BlockButton/BlockButton";
import { IconUserOff } from "@frenchies-spots/icon";

interface FriendPageProps {
  profile: ProfileEntity;
}

const FriendPage = (props: FriendPageProps) => {
  const { profile } = props;

  return (
    <Stack align="center" justify="space-between" h="100%">
      <ProfilePresentation profile={profile} />
      <Font>Lorem ipsum dolor est as</Font>

      <Stack w="100%">
        <ContactButton profile={profile} w="100%" />
      </Stack>
    </Stack>
  );
};

export default FriendPage;
