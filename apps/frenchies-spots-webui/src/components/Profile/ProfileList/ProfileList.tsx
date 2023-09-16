import { ProfileEntity } from "@frenchies-spots/gql";
import React from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import {
  Container,
  ScrollArea,
  type ContainerProps,
} from "@frenchies-spots/material";

interface ProfileListProps extends ContainerProps {
  profileList: ProfileEntity[];
}

const ProfileList = (props: ProfileListProps) => {
  const { profileList, ...containerProps } = props;
  return (
    <Container size="md" h="100%" {...containerProps}>
      <ScrollArea h="100%" p={0} m={0}>
        {profileList.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} mb="md" />
        ))}
      </ScrollArea>
    </Container>
  );
};

export default ProfileList;
