/* eslint-disable @next/next/no-img-element */
import React, { ReactElement } from "react";

import { useAuth } from "../../hooks/use-auth";
import { PageLayout } from "../../components/Layout/PageLayout/PageLayout";
import NavigationLayout from "../../components/Layout/NavigationLayout/NavigationLayout";
import {
  ActionIcon,
  Container,
  Divider,
  Flex,
  Group,
  Image,
  PrimaryButton,
  PrimaryButtonLittle,
  SecondaryButton,
  Stack,
  Font,
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
          {profile && <ProfilePhoto profile={profile} />}
        </Flex>

        <Font variant="h3" ta="center" w="100%">
          {profile?.pseudo}
        </Font>
        <LogoutButton />

        <PrimaryButton
          h={70}
          leftIcon={<IconMapPinPlus />}
          onClick={() => router.push("/spots/edition")}
        >
          Créer un spot
        </PrimaryButton>
        <Flex gap="md" h={70}>
          <SecondaryButton
            h="100%"
            sx={{ flexGrow: 1 }}
            onClick={() => router.push("/profile/spots")}
          >
            Voir mes spots
          </SecondaryButton>
          <ActionIcon
            sx={{ backgroundColor: "#A480A6", color: "white", borderRadius: 8 }}
            onClick={() => router.push("/profile/friends")}
            h="100%"
            m={0}
            py={5}
            w={70}
          >
            <IconUsers />
          </ActionIcon>
          <ActionIcon
            sx={{
              backgroundColor: "white",
              color: "#A480A6",
              border: `1px solid #A480A6`,
              borderRadius: 8,
            }}
            onClick={() => router.push("/profile/config")}
            h="100%"
            m={0}
            py={5}
            w={70}
          >
            <IconSettingsFilled />
          </ActionIcon>
        </Flex>

        {/* <PrimaryButtonLittle
          h={70}
          leftIcon={<IconUsers />}
          onClick={() => router.push("/profile/friends")}
        >
          Mes Amis
        </PrimaryButtonLittle> */}

        <Divider my={32} />

        <Group grow>
          <Flex justify="center" align="center">
            {profile?.avatarUrl && <img src={profile?.avatarUrl} alt="avatar" style={{ width: 80 }} />}
          </Flex>
          {/* <Image src={profile?.avatarUrl} alt="avatar" /> */}
          <Stack>
            <Stack spacing={2}>
              <Font variant="subtitle2">Statut</Font>
              <Font>Jeune avanturier</Font>
            </Stack>

            <Stack spacing={2}>
              <Font variant="subtitle2">Points</Font>
              <Font>{profile?.gamePoint}</Font>
            </Stack>

            <PrimaryButtonLittle onClick={() => router.push("/shop")}>
              Acheter des points
            </PrimaryButtonLittle>
          </Stack>
        </Group>
      </Stack>
    </Container>
  );
};

Profile.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout>
      <GuardLayout isProtected>
        <NavigationLayout>{page}</NavigationLayout>
      </GuardLayout>
    </PageLayout>
  );
};

export default Profile;
