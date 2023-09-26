import React, { ReactElement } from "react";

import {
  Container,
  Flex,
  Stack,
  PrimaryButton,
} from "@frenchies-spots/material";
import { useAuth } from "@/hooks";
import { PageLayout } from "../components";
import { GuardLayout } from "../components/Layout/GuardLayout/GuardLayout";

import { Avatar } from "@frenchies-spots/chat";
import Bubble from "@frenchies-spots/chat/src/components/Bubble/Bubble";
import { useRouter } from "next/router";

const WelcomePage = () => {
  const { profile } = useAuth();

  const router = useRouter();

  return (
    <Container size="sm" h="100%">
      <Stack h="100%" justify="space-between" py={100}>
        <Flex mt="md" gap="md" direction="row" w="100%" justify={"start"}>
          <Avatar color="white" />
          <Stack w="100%" spacing={0}>
            <Bubble
              message={`Bienvenue ${profile?.pseudo} ! Tu gagne 500 points pour ton inscription ! `}
              isParticipant={true}
              w="90%"
            />
            <Bubble
              message={`Amuse toi bien et bonne aventure !`}
              isParticipant={true}
              w="90%"
            />
          </Stack>
        </Flex>

        <PrimaryButton
          style={{ marginTop: 16 }}
          w="100%"
          onClick={() => router.push("/spots")}
        >
          GO
        </PrimaryButton>
      </Stack>
    </Container>
  );
};

export default WelcomePage;

WelcomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout opacity={0.5}>
      <GuardLayout>{page}</GuardLayout>
    </PageLayout>
  );
};
