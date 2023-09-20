import { ProfileEntity } from "@frenchies-spots/gql";
import React, { Fragment } from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import {
  Container,
  ScrollArea,
  type ContainerProps,
  ActionIcon,
  Log,
  Text,
} from "@frenchies-spots/material";
import { IconMessages, IconUserPlus } from "@frenchies-spots/icon";
import useContact from "./../../../hooks/use-contact";

interface ProfileListProps extends ContainerProps {
  profileList: ProfileEntity[];
}

const ProfileList = (props: ProfileListProps) => {
  const { profileList, ...containerProps } = props;

  const { onContactClick } = useContact();

  return (
    <Container
      size="md"
      h="100%"
      {...containerProps}
      sx={{ boxSizing: "border-box" }}
    >
      {profileList.map((profile, index) => (
        <ProfileCard key={profile.id} profile={profile} mb="md">
          <ActionIcon>
            <IconUserPlus />
          </ActionIcon>
          <ActionIcon onClick={() => onContactClick(profile)}>
            <IconMessages />
          </ActionIcon>
        </ProfileCard>
      ))}
    </Container>
  );
};

export default ProfileList;
