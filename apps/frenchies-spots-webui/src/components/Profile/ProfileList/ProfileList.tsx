import React from "react";

import { ProfileEntity } from "@frenchies-spots/gql";
import { Container, type ContainerProps } from "@frenchies-spots/material";

import ProfileCard from "../ProfileCard/ProfileCard";
import ContactButton from "../ContactButton/ContactButton";
import FriendRequestButton from "../FriendRequestButton/FriendRequestButton";
import { useAuth } from "../../../hooks/use-auth";
import ConnexionButton from "../ConnexionButton/ConnexionButton";

interface ProfileListProps extends ContainerProps {
  profileList: ProfileEntity[];
}

const ProfileList = (props: ProfileListProps) => {
  const { profileList, ...containerProps } = props;

  const { profile: currentProfile } = useAuth();

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
          {currentProfile ? (
            <>
              <ContactButton profile={profile} isSmallMode />
              <FriendRequestButton profile={profile} />
            </>
          ) : (
            <ConnexionButton />
          )}
        </ProfileCard>
      ))}
    </Container>
  );
};

export default ProfileList;
