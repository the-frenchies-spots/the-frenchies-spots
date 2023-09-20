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
  PrimaryButton,
  PrimaryButtonLittle,
  createStyles,
  SecondaryButton,
  Stack,
  Text,
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

export const useStyles = createStyles((theme) => ({
  button: {},
}));

const Profile = () => {
  const { profile } = useAuth();

  const { classes } = useStyles();

  const router = useRouter();

  return (
    <Container size="md">
      <Stack pt="md">
        <StatusBar />
        <Flex justify="center">
          <ProfilePhoto />
        </Flex>

        <Font variant="h3" ta="center" w="100%">
          {profile?.pseudo}
        </Font>
        <LogoutButton />

        <PrimaryButton
          h={70}
          leftIcon={<IconMapPinPlus />}
          onClick={() => router.push("/spots/edition")}
          className={classes.button}
        >
          Créer un spot
        </PrimaryButton>
        <Flex gap="md" h={70}>
          <SecondaryButton
            h="100%"
            sx={{ flexGrow: 1 }}
            onClick={() => router.push("/profile/spots")}
            className={classes.button}
          >
            Voir mes spots
          </SecondaryButton>
          <ActionIcon
            sx={{ backgroundColor: "#A480A6", color: "white", borderRadius: 8 }}
            h="100%"
            m={0}
            py={5}
            w={70}
          >
            <IconSettingsFilled />
          </ActionIcon>
        </Flex>

        <PrimaryButtonLittle
          h={70}
          leftIcon={<IconUsers />}
          onClick={() => router.push("/profile/friends")}
          className={classes.button}
        >
          Mes Amis
        </PrimaryButtonLittle>

        <Divider my={32} />

        <Group grow>
          <Image
            src="https://res.cloudinary.com/dw2hb8vmu/image/upload/v1694521996/avatar-game-diablotin_1_mwav1s.png"
            alt="avatar"
          />
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
