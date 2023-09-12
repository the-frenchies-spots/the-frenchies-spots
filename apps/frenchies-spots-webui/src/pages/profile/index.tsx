import React, { ReactElement } from "react";

import { useAuth } from "../../hooks/use-auth";
import { PageLayout } from "../../components/Layout/PageLayout/PageLayout";
import NavigationLayout from "../../components/Layout/NavigationLayout/NavigationLayout";
import {
  ActionIcon,
  Button,
  Container,
  Divider,
  Flex,
  Group,
  Image,
  ImagePicker,
  Stack,
  Text,
} from "@frenchies-spots/material";
import LogoutButton from "../../components/LogoutButton/LogoutButton";
import { IconMapPinPlus, IconSettingsFilled } from "@frenchies-spots/icon";
import { useRouter } from "next/router";
import ProfilePhoto from "../../components/Profile/ProfilePhoto";

const Profile = () => {
  const { profile } = useAuth();

  const router = useRouter();

  return (
    <Container size="md">
      <Stack pt="md">
        <Flex justify="center">
          <ProfilePhoto />
        </Flex>

        <Text ta="center" w="100%">
          {profile?.pseudo}
        </Text>
        <LogoutButton />

        <Button
          h={50}
          leftIcon={<IconMapPinPlus />}
          onClick={() => router.push("/spots/edition")}
        >
          Créer un spot
        </Button>
        <Flex gap="md" h={50}>
          <Button h="100%" sx={{ flexGrow: 1 }}>
            Voir mes spots
          </Button>
          <ActionIcon
            sx={{ backgroundColor: "grey", color: "white" }}
            h="100%"
            m={0}
            py={5}
            w={50}
          >
            <IconSettingsFilled />
          </ActionIcon>
        </Flex>

        <Divider my={32} />

        <Group grow>
          <Image
            src="https://res.cloudinary.com/dw2hb8vmu/image/upload/v1694521996/avatar-game-diablotin_1_mwav1s.png"
            alt="avatar"
          />
          <Stack>
            <Text>Jeune avanturier</Text>
            <Text>1500 points</Text>
            <Button>Acheter des points</Button>
          </Stack>
        </Group>
      </Stack>
    </Container>
  );
};

export default Profile;

Profile.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout>
      <NavigationLayout>{page}</NavigationLayout>
    </PageLayout>
  );
};
