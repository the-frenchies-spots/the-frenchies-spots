import React from "react";

import { ProfileEntity } from "@frenchies-spots/gql";
import {
  IconMessages,
  IconUserPlus,
  IconUserSquareRounded,
} from "@frenchies-spots/icon";
import {
  Button,
  Group,
  type StackProps,
  Stack,
  Text,
  ActionIcon,
} from "@frenchies-spots/material";

import Image from "next/image";
import useContact from "../../../../hooks/use-contact";
import { useRouter } from "next/router";

interface ProfilePreviewProps extends StackProps {
  profile: ProfileEntity;
  currentProfile?: ProfileEntity | undefined;
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

        {currentProfile && (
          <ActionIcon
            sx={{
              border: "1px solid orange",
              borderRadius: 50,
              height: 40,
              width: 40,
            }}
          >
            <IconUserPlus color="orange" />
          </ActionIcon>
        )}
      </Group>

      {currentProfile ? (
        <Button
          variant="outline"
          leftIcon={<IconMessages />}
          onClick={() => onContactClick(profile)}
        >
          Contacter
        </Button>
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
