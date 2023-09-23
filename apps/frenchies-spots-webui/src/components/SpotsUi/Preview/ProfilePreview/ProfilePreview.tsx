import React from "react";

import Image from "next/image";
import {
  Button,
  Group,
  type StackProps,
  Stack,
  Text,
  PrimaryButton,
} from "@frenchies-spots/material";
import { useRouter } from "next/router";
import { Maybe, ProfileEntity } from "@frenchies-spots/gql";
import { IconMessages, IconUserSquareRounded } from "@frenchies-spots/icon";

import useContact from "../../../../hooks/use-contact";
import FriendRequestButton from "../../../Profile/FriendRequestButton/FriendRequestButton";
import ContactButton from "./../../../Profile/ContactButton/ContactButton";
import ProfileDevise from "./../../../Profile/ProfileDevise/ProfileDevise";

interface ProfilePreviewProps extends StackProps {
  profile: ProfileEntity;
  currentProfile?: Maybe<ProfileEntity> | ProfileEntity | undefined;
}

const ProfilePreview = (props: ProfilePreviewProps) => {
  const { profile, currentProfile, ...stackProps } = props;
  const { onContactClick } = useContact();

  const router = useRouter();

  return (
    <Stack h={300} p="md" justify="space-between" {...stackProps}>
      <Group position="apart" align="center">
        {profile?.avatarUrl && (
          <Image
            src={profile.avatarUrl}
            alt={profile.pseudo}
            height={60}
            width={50}
            style={{ borderRadius: 50 }}
          />
        )}
        <Text>{profile.pseudo}</Text>

        {currentProfile && <FriendRequestButton profile={profile} />}
      </Group>

      <ProfileDevise profile={profile} />

      {currentProfile ? (
        <ContactButton profile={profile} />
      ) : (
        <PrimaryButton
          leftIcon={<IconUserSquareRounded />}
          onClick={() => router.push("/sign-in")}
        >
          Connecter vous pour chatter
        </PrimaryButton>
      )}
    </Stack>
  );
};

export default ProfilePreview;
