import React from "react";

import { ProfileEntity } from "@frenchies-spots/gql";
import { Container, type ContainerProps } from "@frenchies-spots/material";

import ProfileCard from "../ProfileCard/ProfileCard";
import ContactButton from "../ContactButton/ContactButton";
import FriendRequestButton from "../FriendRequestButton/FriendRequestButton";

interface ProfileListProps extends ContainerProps {
  profileList: ProfileEntity[];
}

const ProfileList = (props: ProfileListProps) => {
  const { profileList, ...containerProps } = props;

  return (
    <Container
      size="md"
      mb={150}
      h="100%"
      {...containerProps}
      sx={{ boxSizing: "border-box" }}
    >
      {profileList.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} mb="md">
          <ContactButton profile={profile} isSmallMode />
          <FriendRequestButton profile={profile} />
        </ProfileCard>
      ))}
    </Container>
  );
};

export default ProfileList;
