import React, { ReactElement } from "react";
import { PageLayout } from "../../components/Layout/PageLayout/PageLayout";
import NavigationLayout from "../../components/Layout/NavigationLayout/NavigationLayout";
import {
  Container,
  Stack,
  Tabs,
  Text,
  TextInput,
} from "@frenchies-spots/material";

const Chat = () => {
  return (
    <Container size="md" h="100%" pt="md">
      <Text>Chat</Text>
      <Text>
        {`Retrouves toutes les personnes avec qui tu a parler sur l'app !`}
      </Text>
      <Tabs defaultValue="contact" h="80%" pt="md">
        <Tabs.List grow>
          <Tabs.Tab value="contact">Contact</Tabs.Tab>
          <Tabs.Tab value="history">Historique</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="contact" pt="xs" h="100%">
          <Stack pt="md" h="100%">
            <TextInput placeholder="Rechercher" />
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="history" pt="xs" h="100%">
          Historique
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
};

Chat.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout>
      <NavigationLayout>{page}</NavigationLayout>
    </PageLayout>
  );
};

export default Chat;
