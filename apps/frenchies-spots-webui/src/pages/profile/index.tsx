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
  Stack,
  Text,
} from "@frenchies-spots/material";
import LogoutButton from "../../components/LogoutButton/LogoutButton";
import {
  IconMapPinPlus,
  IconSettingsFilled,
  IconUsers,
} from "@frenchies-spots/icon";
import { useRouter } from "next/router";
import ProfilePhoto from "../../components/Profile/ProfilePhoto";
import StatusBar from "../../components/StatusBar/StatusBar";
import { GuardLayout } from "../../components/Layout/GuardLayout/GuardLayout";

const Profile = () => {
  const { profile } = useAuth();

  const router = useRouter();

  return (
    <Container size="md">
      <Stack pt="md">
        <StatusBar />
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
          <Button
            h="100%"
            sx={{ flexGrow: 1 }}
            onClick={() => router.push("/profile/spots")}
          >
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

        <Button
          h={50}
          leftIcon={<IconUsers />}
          onClick={() => router.push("/profile/friends")}
        >
          Mes Amis
        </Button>

        <Divider my={32} />

        <Group grow>
          <Image
            src="https://res.cloudinary.com/dw2hb8vmu/image/upload/v1694521996/avatar-game-diablotin_1_mwav1s.png"
            alt="avatar"
          />
          <Stack>
            <Text>Jeune avanturier</Text>
            <Text>{profile?.gamePoint} points</Text>
            <Button onClick={() => router.push("/shop")}>
              Acheter des points
            </Button>
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
      <GuardLayout isProtected>
        <NavigationLayout>{page}</NavigationLayout>
      </GuardLayout>
    </PageLayout>
  );
};
