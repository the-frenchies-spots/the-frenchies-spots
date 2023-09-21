import React from "react";

import { Maybe, ProfileEntity } from "@frenchies-spots/gql";
import {
  IconMessages,
  IconUserPlus,
  IconUserQuestion,
  IconUserSquareRounded,
} from "@frenchies-spots/icon";
import {
  Button,
  Group,
  type StackProps,
  Stack,
  Text,
  ActionIcon,
  PrimaryButton,
  Flex,
  Log,
} from "@frenchies-spots/material";

import Image from "next/image";
import useContact from "../../../../hooks/use-contact";
import { useRouter } from "next/router";

interface ProfilePreviewProps extends StackProps {
  profile: ProfileEntity;
  currentProfile?: Maybe<ProfileEntity> | ProfileEntity | undefined;
}

const ProfilePreview = (props: ProfilePreviewProps) => {
  const { profile, currentProfile, ...stackProps } = props;
  const { onContactClick, onFriendRequestClick } = useContact();

  const router = useRouter();
  const isSelected = (profile?.notifications?.length || 0) > 0;

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

        {currentProfile && (
          <>
            {!isSelected ? (
              <ActionIcon
                onClick={() => onFriendRequestClick(profile)}
                sx={(theme) => ({
                  border: `1px solid ${theme.colors.yellow[0]}`,
                  borderRadius: 50,
                  height: 40,
                  width: 40,
                })}
              >
                <IconUserPlus color="orange" />
              </ActionIcon>
            ) : (
              <Flex
                align="center"
                justify="center"
                sx={{
                  border: `1px solid green`,
                  backgroundColor: "green",
                  borderRadius: 50,
                  height: 40,
                  width: 40,
                }}
              >
                <IconUserQuestion color="white" />
              </Flex>
            )}
          </>
        )}
      </Group>

      {currentProfile ? (
        <PrimaryButton
          leftIcon={<IconMessages />}
          onClick={() => onContactClick(profile)}
        >
          Contacter
        </PrimaryButton>
      ) : (
        <Button
          leftIcon={<IconUserSquareRounded />}
          onClick={() => router.push("/sign-in")}
        >
          Connecter vous pour chatter
        </Button>
      )}
    </Stack>
  );
};

export default ProfilePreview;
