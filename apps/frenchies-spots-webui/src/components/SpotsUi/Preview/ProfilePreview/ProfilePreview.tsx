import React from "react";

import Image from "next/image";
import {
  Button,
  Group,
  type StackProps,
  Stack,
  Text,
  PrimaryButton,
  Avatar,
  Font,
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
  const src = profile?.photoUrl || profile?.avatarUrl;

  return (
    <Stack h={300} p="md" justify="space-between" {...stackProps}>
      <Group position="apart" align="center">
        <Group>
          {profile?.avatarUrl && (
            <Avatar
              src={src}
              sx={{
                border: !profile?.photoUrl ? "1px solid #3F3979" : undefined,
                width: 70,
                height: 70,
                borderRadius: 70,
              }}
            />
          )}
          <Font variant="h3">{profile.pseudo}</Font>
        </Group>

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
