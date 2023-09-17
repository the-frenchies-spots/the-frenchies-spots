import { ProfileEntity } from "@frenchies-spots/gql";
import React from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import {
  Container,
  ScrollArea,
  type ContainerProps,
  ActionIcon,
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
    <Container size="md" h="100%" {...containerProps}>
      <ScrollArea h="100%" p={0} m={0}>
        {profileList.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} mb="md">
            <ActionIcon>
              <IconUserPlus />
            </ActionIcon>
            <ActionIcon onClick={() => onContactClick(profile)}>
              <IconMessages />
            </ActionIcon>
          </ProfileCard>
        ))}
      </ScrollArea>
    </Container>
  );
};

export default ProfileList;
